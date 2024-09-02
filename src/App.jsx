import React from 'react'

const App = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <h1>Theme Context</h1>
      <button style={{ width: '100px', height: '50px' }}>
        Change Background
      </button>
    </div>
  )
}

export default App
