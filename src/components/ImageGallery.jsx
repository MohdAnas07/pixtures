import axios from 'axios';
import React, { useState, useEffect } from 'react'
import '../styles/imagegallery.scss';
import ImageCard from './ImageCard';

const ImageGallery = () => {

    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            // const res = await axios.get(`https://api.unsplash.com/search/photos?page=2&query=cat&client_id=zaEYGybmd3Jc5G_oJEyX1EpwWORsAQu4bD-2fUrEsAw`)
            const res = await axios.get(`https://api.unsplash.com/photos?page=4&client_id=zaEYGybmd3Jc5G_oJEyX1EpwWORsAQu4bD-2fUrEsAw`)

            setImageData(res.data)
            console.log(res.data);

        }


        getData();
    }, [])

    return (
        <div className="imageGallery">
            <div className="imageGalleryWrapper">
                {
                    imageData ? imageData.map((image) => {
                        return (
                            <ImageCard key={image.id} image={image} />
                        )
                    }) :
                        <></>
                }
            </div>
        </div>
    )
}

export default ImageGallery