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
import { BsCloudDownload } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const PopupModal = ({ popupImg, setShowPopup, Style, borderStyle }) => {

    const totalLikes = popupImg.likes > 999 ? `${(popupImg.likes / 1000).toFixed(1)}k ` : popupImg.likes
    const instagram_username = popupImg.user.social.instagram_username || null
    const twitter_username = popupImg.user.social.twitter_username || null

    const popupHandle = () => {
        setShowPopup(false)
        document.body.style.overflow = 'unset';
    }

    const handleDownload = (url, filename) => {
        // console.log(url);

        axios.get(url, {
            responseType: 'blob',
        })
            .then((res) => {
                console.log('res', res);

                fileDownload(res, filename)
            }).catch((err) => {
                console.error(err);
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
                                <a download={`${popupImg.links.download_location}`} >
                                    <button className="download" onClick={() => {
                                        // handleDownload(, 'test-download.jpg')
                                    }}>

                                        <BsCloudDownload />
                                        Download
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div style={Style} className="popupCardInfo">
                        {/* https://unsplash.com/@LureOfAdventure */}
                        <div className="userInfoBox">
                            <div className="userProfile">
                                <a href={`https://unsplash.com/@${popupImg.user.username}`} target='_blank'>
                                    <img src={popupImg.user.profile_image.small} alt="user Img" />
                                </a>

                                <div className="userInfo">
                                    <span className="name">{popupImg.user.name}</span>
                                    <a href={`https://unsplash.com/@${popupImg.user.username}`} target='_blank'>
                                        <span className="userName">@{popupImg.user.username}</span></a>
                                </div>
                            </div>
                            <div className="socialBox">
                                <div className="userSocialHandle">
                                    {
                                        instagram_username &&
                                        <a href={`https://www.instagram.com/${instagram_username}`} target='_blank' >
                                            <span className="insta"><AiOutlineInstagram className='socialIcon' /> {instagram_username}</span>
                                        </a>
                                    }
                                    {
                                        twitter_username &&
                                        <a href={`https://twitter.com/${twitter_username}`} target='_blank' >
                                            <span className="insta"><CiTwitter className='socialIcon' /> {twitter_username}</span>
                                        </a>
                                    }
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