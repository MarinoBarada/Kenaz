import React from "react";
import CommentIcon from "../../assets/comment-ico.png";

function SideBarPost({date, comments, title, imageUrl}) {
  return (
    <div className="sidebar-post">
      <div className="info">
        <div className="comments">
          <img src={CommentIcon} alt="CommentIco" />
          <span>{comments}</span>
        </div>
        <p>{date}</p>
        <h2>{title}</h2>
      </div>
      <div className="image">
        <img src={imageUrl} alt="image"></img>
      </div>
    </div>
  );
}

export default SideBarPost;
