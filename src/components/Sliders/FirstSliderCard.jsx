import React from "react";
import CommentIcon from "../../assets/comment-ico.png";

function FirstSliderCard({ date, comments, title, imageUrl }) {
  return (
    <div className="first-slider">
      <img src={imageUrl} alt="slika" />
      <div className="info">
        <div className="comments">
          <p>{date}</p>
          <div className="comment">
            <img src={CommentIcon} alt="CommentIcon" />
            <p>{comments} Comments</p>
          </div>
        </div>
        <h1>{title}</h1>
        <button>Read article</button>
      </div>
    </div>
  );
}

export default FirstSliderCard;
