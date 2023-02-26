import React, { useState, useEffect, useContext } from 'react'
import '../styles/nav.scss';
import Hamburger from 'hamburger-react'
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import Toggle from './Toggle';
import { ThemeContext } from '../context';
import Sidenav from './Sidenav';
// import { Style, InputStyle } from '../Theme';


const Nav = ({ setSearch }) => {

    const [searchInput, setSearchInput] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [showSideNav, setShowSideNav] = useState(false)

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const dark = "rgb(26 26 26)";
    const light = "white";
    const Style = {
        backgroundColor: darkMode ? dark : light,
        color: darkMode ? light : dark,
    }

    const InputStyle = {
        backgroundColor: darkMode ? '#4F4F4F' : light,
        color: darkMode ? light : '#4F4F4F',
        border: darkMode && '1px solid #858484'
    }

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearchInput(e.target.value)
        setSearch(searchInput)
    }

    const handleSidenav = () => {
        setShowSideNav(!showSideNav)
    }


    useEffect(() => {
        if (showSideNav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [showSideNav])



    return (
        <div style={Style} className="nav">
            <div className="navWrapper">
                <div className="leftNav">
                    <h2 className="logo">Image Gallery</h2>
                </div>

                <div className="centerNav">

                    <div style={InputStyle} className="searchNav">
                        <AiOutlineSearch className='searchIcon' />
                        <input value={searchInput} onChange={handleInput} type="text" placeholder='Search Image here...' />
                    </div>

                    <ul className="navItems">
                        <li className="item">Explore</li>
                        <li className="item">Collection</li>
                        <li className="item">Community</li>
                    </ul>
                </div>

                <div className='showHamburger'>
                    <AiOutlineSearch onClick={() => setShowSearch(!showSearch)} className='searchIcon' />
                    <GiHamburgerMenu onClick={handleSidenav} className='searchIcon hamburgerIcon' />
                </div>

                <div className="rightNav">
                    <span>Dark Mode</span>
                    <div className="switch" >
                        <Toggle />
                    </div>
                    {/* <label className="switch">
                        <input type="checkbox" checked readOnly />
                        <span className="slider round"></span>
                    </label> */}
                </div>
            </div>

            {/* ============ SideNav =========================== */}

            {showSideNav && <div className="sideNavBox">
                <Sidenav showSideNav={showSideNav} />
            </div>}

        </div>
    )
}

export default Nav