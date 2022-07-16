import React from 'react'
import { Result as Props } from '../../state'
import Text from '~/components/Text'

const Result = ({ balance, guardianCount, erc20 }: Props) => {
  return (
    <div className="grid grid-flow-row gap-6">
      <div>
        <Text>Wallet Balance</Text>
        <Text className="mt-1" large medium>
          {balance} ETH
        </Text>
      </div>
      <div>
        <Text>Number of guardians</Text>
        <Text className="mt-1" large medium>
          {guardianCount}
        </Text>
      </div>
      <div>
        <Text>ERC20 tokens</Text>
        {erc20.map(({ address, symbol, balance }) => (
          <div key={address} className="flex">
            <Text className="mr-2" large>
              {symbol}
            </Text>
            <Text large medium>
              {balance}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Result
