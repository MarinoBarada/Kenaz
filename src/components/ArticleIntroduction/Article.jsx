import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CalendarIcon from "../../assets/calendar.png";
import Authors from "../../data/authors.json";
import baseURL from "../../context/baseURL";

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
  const baseUrl = useContext(baseURL);
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
        <div className="image">
          <img src={`${baseUrl}/${imageUrl}`} alt="image" />
        </div>
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
