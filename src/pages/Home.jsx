import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import ImageGallery from '../components/ImageGallery'
import Nav from '../components/Nav'
import { ThemeContext } from '../context';
import Loading from '../components/Loading';
import Header from '../components/Header'

const Home = () => {
    const [search, setSearch] = useState('')
    const [imageData, setImageData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

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
                const URL = `https://api.unsplash.com/photos?page=4&client_id=${import.meta.env.VITE_CLIENT_ID}`
                const res = await axios.get(URL)
                setImageData(res.data)
                if (res.status === 200) {
                    setIsLoading(false)
                }
            } else {
                const URL = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${import.meta.env.VITE_CLIENT_ID}`
                const res = await axios.get(URL)
                setImageData(res.data.results)
            }
        }
        getData();
    }, [search])




    return (
        <div style={Style} className="home">
            <Nav setSearch={setSearch} />
            {
                isLoading ? <Loading /> :
                    <>
                        <Header setSearch={setSearch} />
                        <ImageGallery imageData={imageData} search={search} />
                    </>
            }
        </div>
    )
}

export default Home