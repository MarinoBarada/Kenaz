import React from "react";

function AboutAuthor({author}) {
  const baseUrl = "http://localhost:5173";

  return (
    <div className="author">
      <h2>About the Author</h2>
      <div className="about-info">
        <div className="image">
          <img src={`${baseUrl}/${author.imageUrl}`} alt={author.nama} />
        </div>
        <p>{author.about}</p>
      </div>
    </div>
  );
}

export default AboutAuthor;
