import React, { useContext, useState } from 'react'
import './App.css'
import { ThemeContext } from './context';
import Home from './pages/Home'

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  const [isLoading, setIsLoading] = useState(true)


  const dark = "#232323";
  const light = "#fff";

  const style = {
    backgroundColor: darkMode ? dark : light,
    color: darkMode ? light : dark
  }

  return (
    <div style={style} className='app'>
      <Home />
    </div>
  )
}

export default App
