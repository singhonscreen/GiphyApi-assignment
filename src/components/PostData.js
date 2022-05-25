import React from 'react'

const PostData = ({setPosts,posts}) => {
    const deletePost =(id)=>{
        let text = "Are you sure?";
        if(window.confirm(text)){
            setPosts(posts.filter(elem=>elem.id !== id ))
        }
    }

    return (
        <div style={{marginTop:20}}>
         {
            posts.map((item)=> {    
                    return (
                        <div className="dataContainer" key={item.id}>
                        {
                            (item.imgSrc!=="" || item.message!=="") ?  <div>
                            <h3>your post.....</h3>
                            <div className="postCard">
                            <h4 className='postStyle'>{item.message}</h4>
                            {
                                (item.imgSrc!=="")?<img className='imageinputStyle imgPost' src={item.imgSrc} alt='not found' /> :null
                            }
                            </div>
                            <div className="btnsContainer">
                            <button disabled className='btnsDisabled' >share</button>
                            <button disabled className='btnsDisabled'>Tag</button>
                            <button className='btns' onClick={()=>deletePost(item.id)} >Delete</button>
                            </div>
                            </div> :null
                        }
                        </div>
                    )
    
            })
         }
        </div>
    )
}

export default PostData
