import { createContext, useState } from 'react'

export const lightTheme = {
  bgPageColor: '#343239',
  bgComponentColor: '#666564b0',
  primaryColor: '#f03d33',
  secondaryColor: '#f2f9fb',
  tertiaryColor: '#e3e1e3',
}

export const darkTheme = {
  bgPageColor: '#fbf9fb',
  bgComponentColor: '#e3e1e3b0',
  primaryColor: '#f03d33',
  secondaryColor: '#343239',
  tertiaryColor: '#666564',
}

export const SwitchThemeContext = createContext({})

export const SwitchThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light')

  return (
    <SwitchThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </SwitchThemeContext.Provider>
  )
}
