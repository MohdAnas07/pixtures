import React from 'react'
import '../styles/imagecard.scss'

import { SlLike } from 'react-icons/sl'

const ImageCard = ({ image, setPopupImg, setShowPopup }) => {

    const handleImage = (image) => {

        setShowPopup(true)
        setPopupImg(image)
        console.log(image);

        document.body.style.overflow = 'hidden';
    }

    return (
        <div className="imageCard" onClick={() => handleImage(image)}>
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