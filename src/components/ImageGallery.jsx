import React, { useState, useEffect } from 'react'
import '../styles/imagegallery.scss';
import ImageCard from './ImageCard';

const ImageGallery = ({ imageData }) => {


    return (
        <div className="imageGallery">
            <div className="imageGalleryWrapper">
                {
                    imageData.length > 0 ? imageData.map((image) => {
                        return (
                            <ImageCard key={image.id} image={image} />
                        )
                    }) :
                        <div className='empty'>
                            No result Found...
                        </div>
                }
            </div>
        </div>
    )
}

export default ImageGallery