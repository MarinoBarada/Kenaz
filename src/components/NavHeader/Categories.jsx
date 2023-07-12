import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Categories() {
  const location = useLocation();
  const path = location.pathname;

  const menuItems = [
    { title: "news" },
    { title: "business" },
    { title: "sport" },
    { title: "life" },
    { title: "tech" },
    { title: "travel" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (path === "/") {
      setActiveIndex(null);
    } else {
      const categoryPaths = menuItems.map(
        (item) => `/${item.title.toLowerCase()}`
      );
      const categoryIndex = categoryPaths.findIndex((categoryPath) =>
        path.startsWith(categoryPath)
      );
      setActiveIndex(categoryIndex !== -1 ? categoryIndex : null);
    }
  }, [path, menuItems]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

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
                <Link to={`/${item.title.toLowerCase()}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Categories;
