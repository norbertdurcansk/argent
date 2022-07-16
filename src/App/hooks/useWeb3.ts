import { AgentWalletDetectorAddress, GuardianManagerAddress, RPC_URL } from '~/constants'
import { Contract, ethers } from 'ethers'
import React from 'react'
import GuardianManager from '~/contracts/GuardianManager.json'
import AgentWalletDetector from '~/contracts/AgentWalletDetector.json'
import { getContract } from '~/utils/web3'
import ky from 'ky'
import { ERC20Balance } from '../state'

export const validateArgentAddress = async (contract: Contract, address: string) => {
  return contract.isArgentWallet(address)
}

export const getGuardianCount = async (contract: Contract, address: string) => {
  return (await contract.guardianCount(address)).toString()
}

interface ApiResponse {
  data: {
    items: Array<{
      contract_ticker_symbol: string
      contract_address: string
      contract_decimals: number
      supports_erc?: Array<string>
      balance: bigint
    }>
  }
}

export const getERC20Balances = async (address: string) => {
  const {
    data: { items },
  }: ApiResponse = await ky
    .get(
      `https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?&key=ckey_b0dd4c62d17849feb225d8c1282`
    )
    .json()

  return items.reduce<Array<ERC20Balance>>(
    (
      acc,
      {
        supports_erc: supportsErc,
        contract_ticker_symbol: symbol,
        contract_address: address,
        contract_decimals: decimals,
        balance,
      }
    ) => {
      const balanceBN = ethers.BigNumber.from(balance)

      // && balanceBN.gt(0) -> if only with some value
      if (supportsErc && supportsErc.includes('erc20') && decimals && symbol) {
        acc.push({ address, symbol, balance: ethers.utils.formatUnits(balanceBN, decimals) })
      }

      return acc
    },
    []
  )
}

const useWeb3 = () => {
  const provider = React.useRef(new ethers.providers.JsonRpcProvider(RPC_URL))
  const guardianManager = React.useRef(
    getContract(GuardianManagerAddress, GuardianManager, provider.current)
  )
  const agentWalletDetector = React.useRef(
    getContract(AgentWalletDetectorAddress, AgentWalletDetector, provider.current)
  )

  return {
    provider,
    guardianManager,
    agentWalletDetector,
  }
}

export default useWeb3
