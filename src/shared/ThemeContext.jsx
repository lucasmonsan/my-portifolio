import { createContext, useState } from 'react'

export const darkTheme = {
  bgPageColor: '#17181d',
  bgComponentColor: '#292c35',
  primaryColor: '#e09145',
  secondaryColor: '#fcd9b8',

  darkColor: '#17181d',
  lightColor: '#fcd9b8',
}

export const lightTheme = {
  bgPageColor: '#fcd9b8',
  bgComponentColor: '#ffecda',
  primaryColor: '#e09145',
  secondaryColor: '#17181d',

  darkColor: '#17181d',
  lightColor: '#fcd9b8',
}

export const SwitchThemeContext = createContext({})

export const SwitchThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark')

  return <SwitchThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>{children}</SwitchThemeContext.Provider>
}
