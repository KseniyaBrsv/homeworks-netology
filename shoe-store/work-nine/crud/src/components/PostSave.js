import React, {useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Post} from "./Post";
import close from "../img/close.png";
import '../App.css';

const PostSave = (props) => {
  const {savePost, setRemove, value} = props;

  const location = useLocation();

  const contentPost = location.state?.contentPost;

  const [content, setContent] = useState(contentPost === null ? '' : contentPost);

  const navigate = useNavigate();
  let {postId} = useParams();

  const IS_CREATE_FORM = value === 0;

  const redirect = (e, link) => {
     e.preventDefault()
     navigate(link)
  }

  let post = new Post(IS_CREATE_FORM ? value : parseInt(postId), content );


  const remoteProduct = (event) => {
    event.preventDefault()
    setRemove(true)
    redirect(event, "/")
  }

  return (
    <div className="post">
      <div className="post_img">
        <p>{IS_CREATE_FORM ? "Создать пост" : "Редактировать публикацию"}</p>
        <button onClick={e => remoteProduct(e)}>
            <img src={close}
                 alt="remove_img"/>
        </button>
      </div>
      <hr/>
      <form onSubmit={(e) => {
        e.preventDefault();
        setContent('');
        savePost(post);
      }}>
        <input
          type="text"
          id="content"
          onChange={(e) => {
            setContent(e.target.value)
          }}
          value={content}
          placeholder={"Введите текст поста..."}
          required
        />
        <hr/>
        <button className="button">{IS_CREATE_FORM ? "Опубликовать" : "Сохранить"}</button>
      </form>
    </div>
  );
};

export default PostSave;
