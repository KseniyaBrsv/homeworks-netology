import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Post} from "./Post";
import close from "../img/close.png";
import '../App.css';

const PostSave = ({savePost, setRemove, value}) => {
  const [content, setContent] = useState('');
  let {postId} = useParams();

  const navigate = useNavigate();

  const redirect = (e, link) => {
        e.preventDefault()
        navigate(link)
  }

  return (
    <div className="post">
      <div className="post_img">
        <p>{value === 0 ? "Создать пост" : "Редактировать публикацию"}</p>
        <button onClick={e => {
            setRemove(true)
            redirect(e, "/")}}>
            <img src={close}
                 alt="remove_img"/>
        </button>
      </div>
      <hr/>
      <form onSubmit={(e) => {
        e.preventDefault()
        let post = new Post(value === 0 ? value : parseInt(postId), content)
        setContent('')
        savePost(post)
      }}>
        <input
          type="text"
          id="content"
          onChange={(e) => {
            setContent(e.target.value)
          }}
          value={content}
          placeholder="Введите текст поста..."
          required
        />
        <hr/>
        <button className="button">{value === 0 ? "Опубликовать" : "Сохранить"}</button>
      </form>
    </div>
  );
};

export default PostSave;
