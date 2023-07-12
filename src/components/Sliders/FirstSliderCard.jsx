import React from "react";
import CommentIcon from "../../assets/comment-ico.png";
import { Link } from "react-router-dom";

function FirstSliderCard({ date, comments, title, imageUrl ,category, id}) {
  const baseUrl = "http://localhost:5173";

  return (
    <div className="first-slider">
      <img src={`${baseUrl}/${imageUrl}`} alt="image" />
      <div className="info">
        <div className="comments">
          <p>{date}</p>
          <div className="comment">
            <img src={CommentIcon} alt="CommentIcon" />
            <p>{comments} Comments</p>
          </div>
        </div>
        <h1>{title}</h1>
        <Link to={`/${category}/${id}`}>Read article</Link>
      </div>
    </div>
  );
}

export default FirstSliderCard;
