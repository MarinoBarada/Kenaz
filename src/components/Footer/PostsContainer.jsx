import React from "react";
import CommentIcon from "../../assets/comment-ico.png";

function PostContainer({ title }) {
  const data = [
    {
      id: 1,
      date: "August 26, 2013",
      comments: 22,
      title: "Palestinians call off peace talks after clash",
      imageUrl: "src/images/secondSlider/slika7.jpg",
    },
    {
      id: 2,
      date: "August 15, 2013",
      comments: 5,
      title: "Palestinians call off peace talks after clash",
      imageUrl: "src/images/secondSlider/slika4.jpg",
    },
    {
      id: 3,
      date: "August 26, 2013",
      comments: 10,
      title: "Palestinians call off peace talks after clash",
      imageUrl: "src/images/secondSlider/slika5.jpg",
    },
  ];
  return (
    <div className="footer-posts-container">
      <h1>{title}</h1>
      <div className="posts">
        {data.map((item) => (
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
              <img src={item.imageUrl} alt="slika" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostContainer;
