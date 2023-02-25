import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import Header from '../components/header'
import ImageGallery from '../components/ImageGallery'
import Nav from '../components/Nav'
import { ThemeContext } from '../context';

const Home = () => {
    const [search, setSearch] = useState('')
    const [imageData, setImageData] = useState([]);

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const dark = "#232323";
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

    useEffect(() => {

        const getData = async () => {
            if (search === '') {
                const res = await axios.get(`https://api.unsplash.com/photos?page=4&client_id=zaEYGybmd3Jc5G_oJEyX1EpwWORsAQu4bD-2fUrEsAw`)
                setImageData(res.data)
                console.log('from open api', res.data);
            } else {
                const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=zaEYGybmd3Jc5G_oJEyX1EpwWORsAQu4bD-2fUrEsAw`)
                setImageData(res.data.results)
                console.log('from query api', res.data.results);
            }
        }
        getData();
    }, [search])




    return (
        <div style={Style} className="home">
            <Nav setSearch={setSearch} />
            {
                search ? <></> : <Header setSearch={setSearch} />
            }
            <ImageGallery imageData={imageData} search={search} />
        </div>
    )
}

export default Home