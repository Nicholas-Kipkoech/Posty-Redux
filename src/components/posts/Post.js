import React, { useEffect, useState } from "react";
import PostComponent from "./PostComponent";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../features/reducers/postSlice";

const Post = () => {
  const baseUrl = "https://dummyjson.com/posts";

  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const fetchPosts = async () => {
    await fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => dispatch(selectPosts(data.posts)));
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="post-component">
        {posts.map((post) => (
          <PostComponent {...post} key={Math.random()} />
        ))}
      </div>
    </>
  );
};

export default Post;
