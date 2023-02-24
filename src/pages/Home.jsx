import React from 'react'
import Header from '../components/header'
import ImageGallery from '../components/ImageGallery'
import Nav from '../components/Nav'

const Home = () => {
    return (
        <div className="home">
            <Nav />
            <Header />
            <ImageGallery />

        </div>
    )
}

export default Home