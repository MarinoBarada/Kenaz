import React, { useState, useEffect } from "react";
import CommentIcon from "../../assets/comment-ico.png";
import Articles from "../../data/articles.json";
import { NavLink } from "react-router-dom";

function PostContainer({ title }) {
  const [randomArticles, setRandomArticles] = useState([]);
  const baseUrl = "http://localhost:5173";

  useEffect(() => {
    const generatedRandomArticles = generateRandomArticles();
    setRandomArticles(generatedRandomArticles);
  }, []);

  const generateRandomArticles = () => {
    const shuffledArticles = Articles.sort(() => Math.random() - 0.5);
    const selectedArticles = shuffledArticles.slice(0, 3);
    return selectedArticles;
  };

  return (
    <div className="footer-posts-container">
      <h1>{title}</h1>
      <div className="posts">
        {randomArticles.map((item) => (
          <NavLink className="post" key={item.id} to={`/${item.category}/${item.id}`} state={{ data: item }}>
            <div className="info">
              <div className="date-comments">
                <p>{item.date}</p>
                <div className="comments">
                  <img src={CommentIcon} alt="CommentIcon" />
                  <p>{item.comments.length}</p>
                </div>
              </div>
              <p>{item.title}</p>
            </div>
            <div className="image">
              <img src={`${baseUrl}/${item.imageUrl}`} alt="image" />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default PostContainer;
