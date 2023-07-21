import React from "react";

function Comment({ id, imageUrl, name, date, content }) {
  return (
    <div className="comment" key={id}>
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="content">
        <div className="info">
          <div className="name-date">
            <h2>{name}</h2>
            <p>{date}</p>
          </div>
          <button>Replay</button>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Comment;
