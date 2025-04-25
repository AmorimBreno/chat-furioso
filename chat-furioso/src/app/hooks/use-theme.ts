import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme-provider'

export const  useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  const { theme, toggleTheme } = context

  return { theme, toggleTheme }
}
