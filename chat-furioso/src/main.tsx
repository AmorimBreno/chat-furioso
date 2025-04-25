import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/app.tsx'
import './app/styles/global.css'
import { ThemeProvider } from './app/contexts/theme-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
