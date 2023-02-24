import React from 'react'
import '../styles/header.scss';
import { AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
    return (
        <div className="header">
            <div className="headerWrapper">
                <h1 className='title'>Download High Quality Images by creators</h1>
                <span className='tagline'>Over 2.4 million+ stock Images by our talented community</span>
                <div className="searchNav">
                    <AiOutlineSearch className='searchIcon' />
                    <input type="text" placeholder='Search high resolution Images, categories, wallpapers' />
                </div>
            </div>
        </div>
    )
}

export default Header;