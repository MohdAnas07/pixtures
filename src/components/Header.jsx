import React, { useState } from 'react'
import '../styles/header.scss';
import { AiOutlineSearch } from 'react-icons/ai'

const Header = ({ setSearch }) => {
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        console.log(e.target.value);
        setInput(e.target.value)
        setSearch(input)
    }
    return (
        <div className="header">
            <div className="headerWrapper">
                <h1 className='title'>Download High Quality Images by creators</h1>
                <span className='tagline'>Over 2.4 million+ stock Images by our talented community</span>
                <div className="searchNav">
                    <AiOutlineSearch className='searchIcon' />
                    <input value={input} onChange={handleInput} type="text" placeholder='Search high resolution Images, categories, wallpapers' />
                </div>
            </div>
        </div>
    )
}

export default Header;