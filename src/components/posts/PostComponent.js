import React from "react";
import { Link, useParams } from "react-router-dom";

const PostComponent = (props) => {
  const { id, title, body, tags, reactions } = props;

  return (
    <div className="posts">
      <div className="post-title">{title}</div>
      <div className="post-body">{body}</div>
      <div className="post-tags">
        {tags.map((tag) => (
          <div className="tags" key={Math.random()}>
            {" "}
            {tag}
          </div>
        ))}
      </div>
      <div className="post-reactions">Reactions: {reactions}</div>
      <Link to={`/${id}`} className="post-detail">
        View Details
      </Link>
    </div>
  );
};

export default PostComponent;
