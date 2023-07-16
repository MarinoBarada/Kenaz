import React from "react";
import { NavLink } from "react-router-dom";

function Post({ imageUrl, title, date, className, category, id, article }) {
  const baseUrl = "http://localhost:5173";

  return (
    <NavLink className={`${className} const`} to={`/${category}/${id}`} state={{ data: article }}>
      <div className="image">
        <img src={`${baseUrl}/${imageUrl}`} alt="image" />
      </div>
      <div className="info">
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
}

export default Post;
