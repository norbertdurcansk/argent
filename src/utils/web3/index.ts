import { ContractInterface, ethers } from 'ethers'

export const getContract = (
  address: string,
  abi: ContractInterface,
  provider: ethers.providers.JsonRpcProvider
) => {
  return new ethers.Contract(address, abi, provider)
}
