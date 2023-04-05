import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelected, viewDetail } from "../../features/reducers/postSlice";

export const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const dispatch = useDispatch();
  const fetchPost = async () => {
    await fetch(`https://dummyjson.com/posts/${id}`)
      .then((resp) => resp.json())
      .then((data) => setPost(data));
  };
  useEffect(() => {
    fetchPost();
    return () => {
      dispatch(removeSelected());
    };
  }, []);

  const { tags, title, body, reactions } = post;

  return (
    <div className="post-details">
      <div className="posty">
        <div className="post-title">{title}</div>
        <div className="post-body">{body}</div>
        <div className="post-tags"></div>
        <div className="post-reactions">Reactions: {reactions}</div>
      </div>
    </div>
  );
};
