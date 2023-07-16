import React from "react";
import CommentIcon from "../../assets/comment-ico.png";
import { NavLink } from "react-router-dom";

function SideBarPost({
  date,
  comments,
  title,
  imageUrl,
  category,
  id,
  article,
}) {
  return (
    <NavLink
      className="sidebar-post"
      to={`/${category}/${id}`}
      state={{ data: article }}
    >
      <div className="info">
        <div className="comments">
          <img src={CommentIcon} alt="CommentIco" />
          <span>{comments.length}</span>
        </div>
        <p>{date}</p>
        <h2>{title}</h2>
      </div>
      <div className="image">
        <img src={imageUrl} alt="image"></img>
      </div>
    </NavLink>
  );
}

export default SideBarPost;
