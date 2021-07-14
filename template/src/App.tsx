// React
import { FC } from 'react'

// Libraries
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

// Custom
import './App.css'
import Routes from './routes'
import store from 'lib/redux'
import theme from 'lib/styled-components/theme'

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
