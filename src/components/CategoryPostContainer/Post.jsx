import React from "react";

function Post({ imageUrl, title, date, className }) {
  return (
    <div className={`${className} const`}>
      <img src={imageUrl} alt="slika" />
      <div className="info">
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Post;
