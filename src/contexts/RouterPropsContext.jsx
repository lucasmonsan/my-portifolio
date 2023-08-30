import { createContext, useState } from 'react'

export const RouterPropsContext = createContext({})

export const RouterPropsProvider = ({ children }) => {
  const [transition, setTransition] = useState('in')

  return <RouterPropsContext.Provider value={{ transition, setTransition }}>{children}</RouterPropsContext.Provider>
}
