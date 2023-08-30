import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/ids.css'
import './styles/keyframes.css'
import './styles/classnames.css'
import { SwitchThemeProvider } from './contexts/ThemeContext'
import { RouterPropsProvider } from './contexts/RouterPropsContext'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SwitchThemeProvider>
      <RouterPropsProvider>
        <App />
      </RouterPropsProvider>
    </SwitchThemeProvider>
  </React.StrictMode>
)
