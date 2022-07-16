import 'tailwindcss/tailwind.css'
import React from 'react'
import Form, { FormValues } from './components/Form'
import Result from './components/Result'
import Text from '~/components/Text'
import { Result as ResultType } from './state'
import { Container } from './index.styled'
import { log } from '~/utils/logger'
import useWeb3, { getGuardianCount, getERC20Balances, validateArgentAddress } from './hooks/useWeb3'
import { ethers } from 'ethers'

const App = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const { provider, guardianManager, agentWalletDetector } = useWeb3()
  const [state, setState] = React.useState<ResultType | null>()

  const onSubmit = async ({ address }: FormValues) => {
    setIsLoading(true)
    setState(null)

    try {
      const isValidAddress = await validateArgentAddress(agentWalletDetector.current, address)

      if (isValidAddress) {
        const guardianCount = await getGuardianCount(guardianManager.current, address)
        const balance = ethers.utils
          .formatEther(await provider.current.getBalance(address))
          .toString()
        const erc20 = await getERC20Balances(address)

        setState({
          guardianCount,
          balance,
          erc20,
        })
      }
    } catch (error) {
      log.error(`Unable to search address`, error)
    }

    setIsLoading(false)
  }

  return (
    <Container>
      <Form onSubmit={onSubmit} />
      {isLoading ? <Text large>Loading...</Text> : null}
      {state ? <Result {...state} /> : null}
    </Container>
  )
}

export default App
