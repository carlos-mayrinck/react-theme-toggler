import React from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { light } from './styles/themes/light'
import { dark } from './styles/themes/dark'
import { usePersistedState } from './utils/usePersistedState'

import type { DefaultTheme } from 'styled-components'

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('@app-theme', light)

  function handleThemeSwitching (): void {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header onThemeSwitch={handleThemeSwitching} />
      <Main />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
