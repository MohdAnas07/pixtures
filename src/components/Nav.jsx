import React from 'react'
import '../styles/nav.scss';
import { AiOutlineSearch } from 'react-icons/ai'

const Nav = () => {
    return (
        <div className="nav">
            <div className="navWrapper">
                <div className="leftNav">
                    <h2 className="logo">Image Gallery</h2>
                </div>
                <div className="centerNav">
                    <div className="searchNav">
                        <AiOutlineSearch className='searchIcon' />
                        <input type="text" placeholder='Search Image here...' />
                    </div>
                    <ul className="navItems">
                        <li className="item">Explore</li>
                        <li className="item">Collection</li>
                        <li className="item">Community</li>
                    </ul>
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