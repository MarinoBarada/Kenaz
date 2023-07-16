import React from "react";
import { NavLink } from "react-router-dom";

function Post({ imageUrl, title, date, className, category, id, article }) {
  return (
    <NavLink
      className={`${className} const`}
      to={`/${category}/${id}`}
      state={{ data: article }}
    >
      <div className="image">
        <img src={imageUrl} alt="image" />
      </div>
      <div className="info">
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
}

export default Post;
