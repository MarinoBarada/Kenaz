import React from "react";
import CommentIcon from "../../assets/comment-ico.png";
import { Link } from "react-router-dom";

function ArticleSliderCard({
  date,
  comments,
  title,
  imageUrl,
  category,
  id,
  article,
}) {
  return (
    <div className="first-slider">
      <img src={imageUrl} alt="image" />
      <div className="info">
        <div className="comments">
          <p>{date}</p>
          <div className="comment">
            <img src={CommentIcon} alt="CommentIcon" />
            <p>{comments.length} Comments</p>
          </div>
        </div>
        <h1>{title}</h1>
        <Link to={`/${category}/${id}`} state={{ data: article }}>
          Read article
        </Link>
      </div>
    </div>
  );
}

export default ArticleSliderCard;
