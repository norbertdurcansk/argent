import React from 'react'
import { Result as Props } from '../../context'
import Text from "~/components/Text"

const Result = ({ balance, guardianCount }: Props) => {
  return <div className="grid grid-flow-row gap-6">
    <div>
      <Text>Wallet Balance</Text>
      <Text className="mt-1" large medium>{balance}</Text>
    </div>
    <div>
      <Text>Number of guardians</Text>
      <Text className="mt-1" large medium>{guardianCount}</Text>
    </div>
  </div>
}

export default Result
