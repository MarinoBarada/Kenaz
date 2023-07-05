import React, { useState } from "react";
import SideBarPost from "./SideBarPost";

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

  const data = [
    {
      id: 1,
      date: "August 26, 2013",
      comments: 22,
      title: "Palestinians call off peace talks after clash",
      imageUrl: "src/images/side-bar-img.jpg",
    },
    {
      id: 2,
      date: "August 15, 2013",
      comments: 5,
      title: "'Margot' Reimagines the Enigmatic Sister of Anne Frank",
      imageUrl: "src/images/side-bar-img.jpg",
    },
    {
      id: 3,
      date: "August 15, 2020",
      comments: 15,
      title: "Palestinians call off peace talks after clash",
      imageUrl: "src/images/side-bar-img.jpg",
    },
    {
      id: 4,
      date: "August 20, 2010",
      comments: 10,
      title: "'Palestinians call off peace talks after clash",
      imageUrl: "src/images/side-bar-img.jpg",
    },
    {
      id: 5,
      date: "August 01, 2013",
      comments: 1,
      title: "Palestinians call off peace talks after clash",
      imageUrl: "src/images/side-bar-img.jpg",
    },
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
      {data.map((item) => (
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
