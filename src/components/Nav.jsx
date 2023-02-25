import React, { useState, useEffect } from 'react'
import '../styles/nav.scss';
import Hamburger from 'hamburger-react'
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';



const Nav = ({ setSearch }) => {

    const [searchInput, setSearchInput] = useState('')
    // const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
    // const [showHamburger, setShowHamburger] = useState(false)


    const handleInput = (e) => {
        console.log(e.target.value);
        setSearchInput(e.target.value)
        setSearch(searchInput)
    }



    return (
        <div className="nav">
            <div className="navWrapper">
                <div className="leftNav">
                    <h2 className="logo">Image Gallery</h2>
                </div>



                <div className="centerNav">
                    <div className="searchNav">
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
                    <AiOutlineSearch className='searchIcon' />
                    <Hamburger style={{ display: 'inline-block' }} />
                </div>

                <div className="rightNav">
                    <span>Dark Mode</span>
                    <label className="switch">
                        <input type="checkbox" checked readOnly />
                        <span className="slider round"></span>
                    </label>
                </div>


            </div>
        </div>
    )
}

export default Nav