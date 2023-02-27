import React from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'
import { AiOutlineClose } from 'react-icons/ai';
import { BiShareAlt } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';
import { SlLike } from 'react-icons/sl';
import { GoDesktopDownload } from 'react-icons/go';


const PopupModal = ({ popupImg, setShowPopup, Style, borderStyle }) => {

    const totalLikes = popupImg.likes > 999 ? `${(popupImg.likes / 1000).toFixed(1)}k ` : popupImg.likes
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
        <>
            <div style={borderStyle} className="popupCard">

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
                            </div>

                            <div className="socialBox">
                                <div className="userSocialHandle">
                                    {popupImg.user.social.instagram_username && <span className="insta"><AiOutlineInstagram className='socialIcon' /> {popupImg.user.social.instagram_username}</span>}
                                    {popupImg.user.social.twitter_username && <span className="twitter"><CiTwitter className='socialIcon' />{popupImg.user.social.twitter_username}</span>}
                                </div>

                                <div className="likesInfo ">
                                    <div className='likeBox' >
                                        {/* <span className="likes download">downloads</span> */}
                                        <GoDesktopDownload className='likeIcon' />
                                        <span className="likes">1.2K</span>
                                    </div>

                                    <div className='likeBox' >
                                        <SlLike className='likeIcon' />
                                        <span className="likes">{totalLikes}</span>
                                    </div>
                                </div>
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
        </>
    )
}

export default PopupModal