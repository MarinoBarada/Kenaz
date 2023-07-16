import React from "react";

function Content({ content }) {
  const baseUrl = "http://localhost:5173";

  return (
    <div className="content-container">
      {content.map((item, index) => {
        if (item.type === "image") {
          return (
            <div className="image" key={index}>
              <img src={`${baseUrl}/${item.content}`} alt={`Image ${index}`} />
            </div>
          );
        } else if (item.type === "paragraph") {
          return (
            <div className="paragraph" key={index}>
              <p>{item.content}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Content;
