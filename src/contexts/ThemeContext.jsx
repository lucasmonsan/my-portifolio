import { createContext, useState } from 'react'

export const darkTheme = {
  bgPageColor: '#161a28',
  bgComponentColor: '#283149a0',
  primaryColor: '#f95d62',
  secondaryColor: '#fafafa',

  darkColor: '#161a28',
  lightColor: '#fafafa',
}

export const lightTheme = {
  bgPageColor: '#fafafa',
  bgComponentColor: '#ffffff60',
  primaryColor: '#ef5259',
  secondaryColor: '#161a28',

  darkColor: '#161a28',
  lightColor: '#fafafa',
}

export const SwitchThemeContext = createContext({})

export const SwitchThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark')

  return <SwitchThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>{children}</SwitchThemeContext.Provider>
}

const Pallet = {
  primary: '#4263d0',
  secondary: '#8da1e3',
  tertiary: '#27283a',
  error: '#dc6d6d',
  background: '#1e1d29',
  outline: '#3c3d4f',
}
