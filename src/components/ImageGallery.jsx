import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'
import '../styles/imagegallery.scss';
import ImageCard from './ImageCard';
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'
import { SlLike } from 'react-icons/sl'
import { BiShareAlt } from 'react-icons/bi'
import { ThemeContext } from '../context';


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
        // backgroundColor: darkMode ? dark : light,
        // color: darkMode ? light : dark,
        border: darkMode && '1px solid #858484'
    }



    const popupHandle = () => {
        setShowPopup(false)
        document.body.style.overflow = 'unset';
    }

    const handleDownload = (url, filename) => {
        console.log(url);

        axios.get(url, {
            responseType: 'blob',
        })
            .then((res) => {
                console.log(res);

                fileDownload(res.data, filename)
            })
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



            {/* ============= POPUP MODAL =========================================== */}
            {
                showPopup && popupImg && <div style={borderStyle} className="popupCard">
                    <div style={Style} className="popupWrapper">
                        <AiOutlineClose style={Style} className='popupClose' onClick={popupHandle} />
                        <div className="popupCardImg">
                            <img src={popupImg.urls.full} alt={popupImg.description
                            } className="popupImg" />

                            <div className="shareDownload">
                                <div className="shareBtns">
                                    <button className="shareBtn"><BiShareAlt />Share</button>
                                    <button className="shareBtn"><AiOutlineInfoCircle />Info</button>
                                </div>
                                <div className="downloadBtn">
                                    <button className="download" onClick={() => {
                                        handleDownload('https://images.unsplash.com/photo-1677161082730-5f0a653428b8?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb', 'test-download.jpg')
                                    }}> Download Image</button>
                                </div>
                            </div>
                        </div>

                        <div style={Style} className="popupCardInfo">
                            <div className="userInfoBox">
                                <div className="userProfile">
                                    <img src={popupImg.user.profile_image.small} alt="user Img" />

                                    <div className="userInfo">
                                        <span className="name">{popupImg.user.name}</span>
                                        <span className="userName">@{popupImg.user.username}</span>
                                    </div>

                                    <div className="userSocialHandle">
                                        {popupImg.user.social.instagram_username && <span className="insta"><AiOutlineInstagram className='socialIcon' /> {popupImg.user.social.instagram_username}</span>}
                                        {popupImg.user.social.twitter_username && <span className="twitter"><CiTwitter className='socialIcon' />{popupImg.user.social.twitter_username}</span>}
                                    </div>
                                </div>

                                <div className="likesInfo">
                                    <span className="likes">1.2</span>
                                    <span className="likes download">downloads</span>
                                    <SlLike className='likeIcon' />
                                    <span className="likes">{popupImg.likes > 999 ? `${(popupImg.likes / 1000).toFixed(1)}k ` : popupImg.likes}</span>
                                </div>
                            </div>

                            {
                                popupImg.tags && <div className="tagsCard">
                                    <span className="tagLine">Releted Tags</span>
                                    <div className="tagsBox">
                                        {
                                            popupImg.tags.map((tag, ind) => {
                                                return (
                                                    <span key={ind} className="tag">{tag.title}</span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            }
                        </div>


                    </div>
                </div>
            }


        </div>
    )
}

export default ImageGallery

// {image.likes > 999 ? `${(image.likes / 1000).toFixed(1)}k ` : image.likes}