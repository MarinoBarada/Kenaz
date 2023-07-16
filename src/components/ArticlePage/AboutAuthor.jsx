import React, { useContext } from "react";
import baseURL from "../../context/baseURL";

function AboutAuthor({ author }) {
  const baseUrl = useContext(baseURL);

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
