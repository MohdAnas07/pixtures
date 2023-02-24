import React from 'react'
import '../styles/imagecard.scss'

import { SlLike } from 'react-icons/sl'

const ImageCard = ({ image }) => {

    return (
        <div className="imageCard">
            <div className="cardWrapper">
                <div className="gridImages">
                    <img src={image.urls.small} alt={image.urls.description
                    } className='cardImg' />
                </div>

                <div className="cardInfo">

                    <div className="leftInfo">
                        <img src="./images/userimg.jpg" alt="" className="userImg" />
                        <div className="userInfo">
                            <span className="name">Julia Robertson</span>
                            <span className="userName">@juliaclicks</span>
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