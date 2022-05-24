import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Message from './components/Message';
import Header from './components/Header';
import Features from './components/Features';
import PostData from './components/PostData';

function App() {
  const [toggleGif, setToggleGif] = useState(false)
  const [searchApi, setSearchApi] = useState("trending")
  const [state, setState] = useState([]);
  const [searchById, setSearchById] = useState("")
  const [postValue, setPostValue] = useState("")
  const [posts, setPosts] = useState([{ message: postValue, imgSrc: searchById }])

  var gifyApiKey = "0jSw3nFHhL0p06IryMADgdyxGYdihgsK";
  var gifyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchApi}&rating=g&api_key=${gifyApiKey}`;
  var gifyApiUrlById = `https://api.giphy.com/v1/gifs/${searchById}?api_key=${gifyApiKey}`

  const fetchApi = async () => {
    try{
    const res = await axios.get(gifyApiUrl);
    const result = (res.data.data);
    setState(result)
    }catch(err){ console.log(err)
    }
  }

  useEffect(() => {
    fetchApi();
  }, [searchApi])


  const fetchApiById = async () => {
    try{
      const resByid = await axios.get(gifyApiUrlById);
      const resultById = (resByid.data.data.images.fixed_height.url);
      setSearchById(resultById)
    } catch (err){
      console.log(err)
    }
  
  }

  useEffect(() => {
    fetchApiById();
  }, [searchById])
  return (
    <div className="App" >
      <Header />
      <Message searchById={searchById} posts={posts} setPosts={setPosts} setPostValue={setPostValue} postValue={postValue} setSearchById={setSearchById} />
      <Features setToggleGif={setToggleGif} toggleGif={toggleGif} />
      {
        toggleGif ? <div className='main'><NavBar setSearchApi={setSearchApi} setSearchById={setSearchById} state={state} setToggleGif={setToggleGif} /></div> : null
      }

      <PostData posts={posts} setPosts={setPosts}  />
    </div>
  );
}

export default App;
