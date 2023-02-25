import React, { useContext } from 'react'
import '../styles/imagecard.scss'

import { SlLike } from 'react-icons/sl'
import { ThemeContext } from '../context'

const ImageCard = ({ image, setPopupImg, setShowPopup }) => {


    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const dark = "#141414";
    const light = "#fff";

    const Style = {
        backgroundColor: darkMode ? dark : light,
        color: darkMode ? light : dark,
        border: darkMode && '1px solid #858484'
    }

    const handleImage = (image) => {
        setShowPopup(true)
        setPopupImg(image)
        console.log(image);
        document.body.style.overflow = 'hidden';
    }



    return (
        <div style={Style} className="imageCard" onClick={() => handleImage(image)}>
            <div className="cardWrapper">
                <div className="imageWrapper">
                    <img src={image.urls.small} alt={image.description
                    } className='cardImg' />
                </div>
                <div className="cardInfo">
                    <div className="leftInfo">
                        <img src={image.user.profile_image.small} alt="" className="userImg" />
                        <div className="userInfo">
                            <span className="name">{image.user.name}</span>
                            <span className="userName">@{image.user.username}</span>
                        </div>
                    </div>

                    <div className="rightInfo">
                        <SlLike className='likeIcon' />
                        <span className="likes">{image.likes > 999 ? `${(image.likes / 1000).toFixed(1)}k ` : image.likes}</span>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default ImageCard