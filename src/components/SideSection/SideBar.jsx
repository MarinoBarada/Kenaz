import React, { useState, useEffect } from "react";
import SideBarPost from "./SideBarPost";
import Articles from "../../data/articles.json";

function SideBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sortedArticles, setSortedArticles] = useState([]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const menuItems = [
    { title: "Popular" },
    { title: "Top Rated" },
    { title: "Comments" },
  ];

  useEffect(() => {
    if (activeIndex === 0) {
      setSortedArticles([...Articles].sort((a, b) => b.date - a.date));
    } else if (activeIndex === 1 || activeIndex === 2) {
      setSortedArticles(
        [...Articles].sort((a, b) => b.comments.length - a.comments.length)
      );
    }
  }, [activeIndex, Articles]);

  return (
    <div className="sidebar">
      <div className="sidebar-posts-nav">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => handleItemClick(index)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      {sortedArticles.slice(0, 5).map((item) => (
        <SideBarPost
          key={item.id}
          date={item.date}
          comments={item.comments}
          title={item.title}
          imageUrl={item.imageUrl}
          category={item.category}
          id={item.id}
          article={item}
        />
      ))}
    </div>
  );
}

export default SideBar;
