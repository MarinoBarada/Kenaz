import React, { useState } from "react";
import SideBarPost from "./SideBarPost";
import Articles from "../../data/articles.json";

function SideBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const menuItems = [
    { title: "Popular" },
    { title: "Top Rated" },
    { title: "Comments" },
  ];

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
      {Articles.sort((a, b) => b.likes - a.likes)
        .slice(0, 5)
        .map((item) => (
          <SideBarPost
            key={item.id}
            date={item.date}
            comments={item.comments}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        ))}
    </div>
  );
}

export default SideBar;
