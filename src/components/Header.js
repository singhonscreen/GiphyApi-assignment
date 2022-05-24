import React from 'react'

const Header = () => {
    return (
        <div className='headerContainer'>
        <div className='headerItem horline'>   
        <i className="fas fa-pen"></i>
        <span>Compose Post</span>
        </div>
        <div className='headerItem horline'>   
        <i className="fas fa-camera-retro"></i>
        <span>Photo/Video Album</span>
        </div>
        <div className='headerItem'>
        <i className="fas fa-video"></i>
        <span>Live Video</span>
        </div>
        <div className='headerItem cross'>
        <i className="fas fa-times"></i>
        </div>
        </div>
    )
}

export default Header
