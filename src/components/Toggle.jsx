import React, { useContext } from 'react'
import '../styles/toggle.scss'
import { ThemeContext } from '../context'

function Toggle() {

    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }

    return (
        <div className='toggle' onClick={handleClick}>
            <img src='./images/sun.png' alt="sun-pic" className='toggle-icon' />
            <img src='./images/moon.png' alt="sun-pic" className='toggle-icon' />
            <div className="toggle-button" style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
}

export default Toggle