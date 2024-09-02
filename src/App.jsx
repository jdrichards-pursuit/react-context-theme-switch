import { useTheme } from './context/ThemeProvider'

const App = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className={`container ${theme}`}>
      <h1>Theme Context</h1>
      <button
        style={{ width: '100px', height: '50px' }}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Change Background
      </button>
    </div>
  )
}

export default App
