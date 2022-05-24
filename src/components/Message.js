import React from 'react';
const Message = ({searchById,postValue,setPostValue,setPosts, posts,setSearchById}) => {
    return (  
        <div className="textAreaStyle">
        <div className="postContainer">
        <i className="fas fa-user-tie"></i>
        <textarea  placeholder='Write Something Here....' 
        rows= "5"
        value = {postValue}
        onChange={(e)=>setPostValue(e.target.value)} />
        </div>
        <div>
        {
            searchById ?
            <img className='imageinputStyle' src={searchById} alt='not found' /> : null
        }
         </div>     
         <div className='appBtnContaner'>
            <button  ><i className="fas fa-lock"></i> Only me <i className="fas fa-caret-down"></i></button>
            <button className='postbtn'onClick={()=>
                {
            setPosts([{id:(Math.random()*10000).toFixed(0), message : postValue, imgSrc : searchById},...posts])
            setSearchById("")
            setPostValue("")
        }
    } >Post</button>
            </div>
        </div>      
    )
}

export default Message
