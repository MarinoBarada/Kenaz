import React from "react";

function SideBarPost({date, comments, title, imageUrl}) {
  return (
    <div className="sidebar-post">
      <div className="info">
        <div className="comments">
          <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="11" height="10" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_0_12"
                  transform="scale(0.0625 0.0714286)"
                />
              </pattern>
              <image
                id="image0_0_12"
                width="11"
                height="10"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAABEklEQVQ4EY3SzyqFURQF8G9kYCBTA90kJd2UDEheQ57glqGBFzBBGEhmhkwpBoaewUQZY+J6An9/7Nv+cq5uX/fU7uz2Xmudc/ZZVVUsjOMEj/jEd0bkUTvGWEH5S7GfpCccYAVTGas4xDM+sPvHrKoKN3jDWjTQxg4uQ6AEYx3vuO7VsZWq85jDbTQT2C7JdY6FvO1mnPaKI0ziAa0a2LTnrLohEINq4RzLTaSyh+nghsAXZv+/tQQPykuBLk4HgZpq+YSXuEEnh7jURCh7WExOp1fHRRY2SuCgvDjwqq+Pvfya7WhgBqMZpZHClf1GqpVwn+a507+GsnJ8ZXxpuCwGO1ELD7XjLO0c9h0ZivQL+gG7kH7IcWuUGgAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>
          <span>{comments}</span>
        </div>
        <p>{date}</p>
        <h2>{title}</h2>
      </div>
      <div className="image">
        <img src={imageUrl} alt="image"></img>
      </div>
    </div>
  );
}

export default SideBarPost;
