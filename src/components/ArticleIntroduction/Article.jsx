import React from "react";
import { Link, NavLink } from "react-router-dom";
import CalendarIcon from "../../assets/calendar.png";
import Authors from "../../data/authors.json";

function Article({
  id,
  title,
  category,
  date,
  comments,
  authorId,
  imageUrl,
  introduction,
  article,
}) {
  const authorName = Authors.find((author) => author.id === authorId)?.name;

  return (
    <div className="article">
      <h1 className="title">{title}</h1>
      <div className="calendar-info">
        <div className="date">
          <img src={CalendarIcon} alt="CalendarIcon" />
          <p>{date}</p>
        </div>
        <p>Author: {authorName}</p>
        <p>{comments.length} Comments</p>
      </div>
      <div className="info">
        <NavLink className="image" to={`/${category}/${id}`} state={{ data: article }}>
          <img src={imageUrl} alt="image" />
        </NavLink>
        <div className="intraduction">
          <p>{introduction}</p>
          <Link to={`/${category}/${id}`} state={{ data: article }}>
            Read article
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Article;
