import { createContext, useState } from 'react'

export const darkTheme = {
  bgPageColor: '#2d2c2e',
  bgComponentColor: '#666564b0',
  primaryColor: '#fd1f4a',
  secondaryColor: '#faf5e6',
  tertiaryColor: '#e3e1e3',
}

export const lightTheme = {
  bgPageColor: '#faf5e6',
  bgComponentColor: '#e3e1e3b0',
  primaryColor: '#fd1f4a',
  secondaryColor: '#2d2c2e',
  tertiaryColor: '#666564',
}

export const SwitchThemeContext = createContext({})

export const SwitchThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark')

  return <SwitchThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>{children}</SwitchThemeContext.Provider>
}
