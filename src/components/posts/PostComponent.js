import React from "react";

const PostComponent = (props) => {
  const { title, body, tags, reactions } = props;

  return (
    <div className="posts">
      <div className="post-title">{title}</div>
      <div className="post-body">{body}</div>
      <div className="post-reactions">Reactions: {reactions}</div>
    </div>
  );
};

export default PostComponent;
