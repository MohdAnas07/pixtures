import React, { useContext } from 'react'
import '../styles/sidenav.scss';
import Toggle from './Toggle';
import { ThemeContext } from '../context';

const Sidenav = () => {


    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const dark = "#232323";
    const light = "white";
    const Style = {
        backgroundColor: darkMode ? dark : light,
        color: darkMode ? light : dark,
    }
    // const InputStyle = {
    //     backgroundColor: darkMode ? '#4F4F4F' : light,
    //     color: darkMode ? light : '#4F4F4F',
    //     border: darkMode && '1px solid #858484'
    // }
    // { background: { darkMode } ? "#000" : '#ffff', color: { darkMode } ? "#fff" : '#000' }

    return (
        <div style={Style} className='sidenav'>
            <div className="switch" >
                <Toggle />
            </div>
            <hr style={{ width: '100%' }} />

            <ul className="navItems">
                <li className="item">Explore</li>
                <li className="item">Collection</li>
                <li className="item">Community</li>
            </ul>
        </div>
    )
}

export default Sidenav


{/* <div className="centerNav"> */ }
{/* <div style={InputStyle} className="searchNav">
    <AiOutlineSearch className='searchIcon' />
    <input value={searchInput} onChange={handleInput} type="text" placeholder='Search Image here...' />
</div> */}