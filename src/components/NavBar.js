import React from 'react';


const NavBar = ({setSearchApi, setSearchById, state, setToggleGif}) => {
   
    // console.log(searchById)
    return (
        <div className='gifyMainContainer'>
            <input placeholder='search' onChange={(event)=>setSearchApi(event.target.value)} />
            <div className='ImageDiv' >
            {
                state.map((item)=>{
                    return(
                        <div className='imagContainer' key = {item.id}
                         onClick={()=>{setSearchById(item.id)
                            setToggleGif(false)
                        }
                        }>
                        <img className='imageStyle' src={item.images.fixed_height.url} alt='not found' />
                        </div>
                        )
                    })
                }
                </div>
            <div>
           
            
            </div>
        </div>
    )
}

export default NavBar
