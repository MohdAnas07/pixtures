import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../components/header'
import ImageGallery from '../components/ImageGallery'
import Nav from '../components/Nav'

const Home = () => {
    const [search, setSearch] = useState('')
    const [imageData, setImageData] = useState([]);

    useEffect(() => {

        const getData = async () => {
            if (search === '') {
                const res = await axios.get(`https://api.unsplash.com/photos?page=4&client_id=zaEYGybmd3Jc5G_oJEyX1EpwWORsAQu4bD-2fUrEsAw`)
                setImageData(res.data)
                console.log('from open api', res.data);
            } else {
                const res = await axios.get(`https://api.unsplash.com/search/photos?page=2&query=${search}&client_id=zaEYGybmd3Jc5G_oJEyX1EpwWORsAQu4bD-2fUrEsAw`)
                setImageData(res.data.results)
                console.log('from query api', res.data.results);
            }
        }
        getData();
    }, [search])

    return (
        <div className="home">
            <Nav setSearch={setSearch} />
            <Header setSearch={setSearch} />
            <ImageGallery imageData={imageData} />
        </div>
    )
}

export default Home