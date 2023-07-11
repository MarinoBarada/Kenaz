import React from "react";

function Post({ imageUrl, title, date, className }) {
  return (
    <div className={`${className} const`}>
      <div className="image">
        <img src={imageUrl} alt="image" />
      </div>
      <div className="info">
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Post;
