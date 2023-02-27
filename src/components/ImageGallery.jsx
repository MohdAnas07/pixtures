import React, { useState, useEffect, useContext } from 'react'
import '../styles/imagegallery.scss';
import ImageCard from './ImageCard';
import { ThemeContext } from '../context';
import PopupModal from './PopupModal';


const ImageGallery = ({ imageData, search }) => {

    const [showPopup, setShowPopup] = useState(false);
    const [popupImg, setPopupImg] = useState({});

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const dark = " #141414";
    const light = "#fff";

    const Style = {
        backgroundColor: darkMode ? dark : light,
        color: darkMode ? light : dark,
    }

    const borderStyle = {
        backgroundColor: darkMode ? "rgb(224 224 224 / 90%)" : "rgba(0, 0, 0, 0.9)",
        // color: darkMode ? light : dark,
        border: darkMode && '1px solid #858484'
    }


    return (
        <div className="imageGallery">
            {
                // Tags DATA ================================================
                imageData.length > 0 && <div className="tagsCard">
                    <h2>{search}</h2>
                    <div className="tagsBox">
                        {
                            imageData.slice(0, 4).map((image) => {
                                return (
                                    image.tags && image.tags.map((tag, ind) => {
                                        return (
                                            <span className="tag" key={ind} >{tag.title}</span>
                                        )
                                    })
                                )
                            })
                        }
                    </div>
                </div>
            }

            <div className="imageGalleryWrapper">
                {
                    imageData.length > 0 ? imageData.map((image) => {
                        return (
                            <ImageCard key={image.id} image={image} setPopupImg={setPopupImg} setShowPopup={setShowPopup} />
                        )
                    }) :
                        <div className='empty'>
                            No result Found...
                        </div>
                }
            </div>


            {/* ============ POPUP MODAL ================================= */}

            {
                showPopup && popupImg && <PopupModal popupImg={popupImg} setShowPopup={setShowPopup} Style={Style} borderStyle={borderStyle} />
            }

        </div>
    )
}

export default ImageGallery

// {image.likes > 999 ? `${(image.likes / 1000).toFixed(1)}k ` : image.likes}