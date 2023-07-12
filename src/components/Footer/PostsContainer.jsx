import React, { useState, useEffect } from "react";
import CommentIcon from "../../assets/comment-ico.png";
import Articles from "../../data/articles.json";

function PostContainer({ title }) {
  const [randomArticles, setRandomArticles] = useState([]);

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
          <div className="post" key={item.id}>
            <div className="info">
              <div className="date-comments">
                <p>{item.date}</p>
                <div className="comments">
                  <img src={CommentIcon} alt="CommentIcon" />
                  <p>{item.comments}</p>
                </div>
              </div>
              <p>{item.title}</p>
            </div>
            <div className="image">
              <img src={item.imageUrl} alt="image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostContainer;
