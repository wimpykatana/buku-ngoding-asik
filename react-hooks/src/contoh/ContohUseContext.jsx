import React, { useState, useContext } from 'react'

const ThemeContext = React.createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function ThemedComponent() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>Tema Saat Ini: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Ganti Tema
      </button>
    </div>
  )
}

function OtherThemedComponent() {
    const { theme } = useContext(ThemeContext)

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <p>Komponen ini akan mengikuti Tema</p>
        </div>
    )
}

function ContohUseContext() {
  return (
    <div className='wrapper'>
      <ThemeProvider>
        <h1>Contoh Hook useContext</h1>
        <ThemedComponent />
        <OtherThemedComponent />
      </ThemeProvider>
    </div>
  )
}

export default ContohUseContext
