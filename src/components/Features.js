import React from 'react';

const Features = ({toggleGif,setToggleGif}) => {
    return (
        <div className='featureContainer'>
        <div className='featureItem '>   
        <i className="fas fa-user-friends"></i>
        <span>Tag friends</span>
        </div>
        <div className='featureItem'>   
        <i className="fas fa-map-marker-alt"></i>
        <span>Check In</span>
        </div>
        <div className='featureItem' onClick={()=>setToggleGif(!toggleGif)}>
        <p className='gifIcon'>Gif 
        </p>
        <span className='gifbtn' >Gif</span>
        </div>
        <div className='featureItem'>
        <i className="fas fa-calendar-alt"></i>
        <span>Tag Events</span>
        </div>
        </div>
    )
}

export default Features
