import React from 'react'
import ReactDOM from 'react-dom/client'
import { SwitchThemeProvider } from './shared/ThemeContext'
import './styles/index.css'
import './styles/ids.css'
import './styles/keyframes.css'
import './styles/classnames.css'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SwitchThemeProvider>
      <App />
    </SwitchThemeProvider>
  </React.StrictMode>
)
