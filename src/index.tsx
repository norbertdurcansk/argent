import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App'
import { GlobalStyles } from './views/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './ui/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
)
