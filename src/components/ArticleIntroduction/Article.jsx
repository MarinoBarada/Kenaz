import React from "react";
import { Link } from "react-router-dom";
import CalendarIcon from "../../assets/calendar.png";

function Article({
  id,
  title,
  category,
  date,
  comments,
  author,
  imageUrl,
  introduction,
}) {
  const baseUrl = "http://localhost:5173";

  return (
    <div className="article">
      <h1>{title}</h1>
      <div className="calendar-info">
        <div className="date">
          <img src={CalendarIcon} alt="CalendarIcon" />
          <p>{date}</p>
        </div>
        <p>Author: {author}</p>
        <p>{comments} Comments</p>
      </div>
      <div className="info">
        <div className="image">
          <img src={`${baseUrl}/${imageUrl}`} alt="image" />
        </div>
        <div className="intraduction">
          <p>{introduction}</p>
          <Link to={`/${category}/${id}`}>Read article</Link>
        </div>
      </div>
    </div>
  );
}

export default Article;
