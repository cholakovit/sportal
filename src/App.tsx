import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { ColorModeContext } from './helper/Context'
import { useState, useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { sportalTheme } from './helper/sportalTheme'

import HomeView from './pages/Home'
import HeaderView from './components/Header/HeaderView'

function App() {

  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
  }),[])
  
  const theme = sportalTheme(mode)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <HeaderView />
          <Router>
            <Routes>
              <Route path='/'>
                <Route index element={<HomeView />} />

                {/* Catch all - replace with 404 component if you want */}
                <Route path='*' element={<Navigate to='/' replace />} />
              </Route>
            </Routes>
          </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
