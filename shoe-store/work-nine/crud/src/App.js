import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Posts from "./components/Posts";
import axios from "axios";
import {Post} from './components/Post'
import PostView from "./components/PostView";
import PostSave from "./components/PostSave";
import './App.css';

const App = () => {
  const navigate = useNavigate();
  const URL = 'http://localhost:7777/posts';
  const [posts, setPosts] = useState([]);
  const [isRemove, setRemove] = useState(false);

  const updatePosts = async () => {
    let response = await axios.get(URL);
    let responsePosts = response.data.map(x => new Post(x.id, x.content));
    setPosts(responsePosts);
  }

  const savePost = async (post) => {
    await axios.post(URL, post);
    await updatePosts()
    navigate('/');
  }

  const deletePost = async (e, id) => {
    e.preventDefault();
    await axios.delete(URL + '/' + id);
    await updatePosts()
    navigate('/');
  }

  useEffect(() => updatePosts, []);

  useEffect(() => {
    if(isRemove) setRemove(false)
  }, [isRemove]);


  return (
    <Routes>
      <Route path="/" element={<Posts posts={posts} />}/>
      <Route path="/post/:postId" element={<PostView posts={posts} deletePost={deletePost}/>}/>
      <Route path="/posts/:postId/edit" element={<PostSave savePost={savePost}/>}/>
      {!isRemove && <Route path="/posts/new" element={<PostSave savePost={savePost} setRemove={setRemove} value={0}/>}/>}
      <Route path="*" element={<Posts posts={posts}/>}/>
    </Routes>
  );
};

export default App;
