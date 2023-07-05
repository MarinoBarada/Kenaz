import React, { useState } from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const menuItems = [
    { title: "News" },
    { title: "Business" },
    { title: "Sport" },
    { title: "Life" },
    { title: "Tech" },
    { title: "Travel" },
  ];

  return (
    <>
      <nav>
        <div className="wrapper flex">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={activeIndex === index ? "active" : ""}
                onClick={() => handleItemClick(index)}
              >
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Categories;
