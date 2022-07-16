import 'tailwindcss/tailwind.css'
import React from 'react'
import Form, { FormValues } from './components/Form'
import Result from './components/Result'
import { AppContextType, AppProvider } from './context'
import { Container } from './index.styled'

const App = () => {
  const [context, setContext] = React.useState<AppContextType>({
    result: {
      guardianCount: 10,
      erc20: {},
      balance: 10,
    },
  })

  const onSubmit = async (values: FormValues) => {
    console.log(values)
  }

  return (
    <Container>
      <AppProvider context={context}>
        <Form onSubmit={onSubmit} />
        {context.result ? <Result {...context.result} /> : null}
      </AppProvider>
    </Container>
  )
}

export default App
