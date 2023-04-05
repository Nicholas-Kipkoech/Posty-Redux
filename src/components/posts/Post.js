import React, { useEffect, useState } from "react";
import PostComponent from "./PostComponent";

const Post = () => {
  const baseUrl = "https://dummyjson.com/posts";

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    await fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setPosts(data.posts));
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
