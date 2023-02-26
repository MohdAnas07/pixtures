import React from 'react'
import '../styles/loading.scss'

const Loading = () => {
    return (
        <div className='loading'>
            <img src="./images/loading.png" alt="Loading Image" />
            <h3>Loading some awesome Images...</h3>
        </div>
    )
}

export default Loading