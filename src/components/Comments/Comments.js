import "./Comments.css";

import Comment from "./Comment";
import React from "react";

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, commentChange } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map((comment, i) => {
        return <Comment key={i} comment={comment} />;
      })}
      <div className="comment-input">
        <input placeholder="new comment" onChange={(e) => commentChange(e)} />
        <button>add</button>
      </div>
    </div>
  );
};

export default Comments;
