import { useContext } from 'react'
import { styled, ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, SwitchThemeContext } from './shared/ThemeContext'
import { Router } from './Router'

export const App = () => {
  const { currentTheme } = useContext(SwitchThemeContext)

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <ThemeProps>
        <Router />
      </ThemeProps>
    </ThemeProvider>
  )
}
const ThemeProps = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${(props) => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.bgPageColor};
`
