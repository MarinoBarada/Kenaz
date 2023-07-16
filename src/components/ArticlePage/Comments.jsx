import React, { useState } from "react";

function Comments({ comments }) {
  const baseUrl = "http://localhost:5173";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [newComment, setNewComment] = useState({});

  const commentData = (event) => {
    event.preventDefault();
    setNewComment(formData);

    setFormData({
      name: "",
      email: "",
      comment: "",
    });
  };

  function changeInput(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="comments-container">
      <h1>Comments</h1>
      <div className="comments-wrapper">
        {comments.map((item) => (
          <div className="comment" key={item.id}>
            <div className="image">
              <img src={`${baseUrl}/${item.imageUrl}`} alt={item.name} />
            </div>
            <div className="content">
              <div className="info">
                <div className="name-date">
                  <h2>{item.name}</h2>
                  <p>{item.date}</p>
                </div>
                <button>Replay</button>
              </div>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="add-comment">Add Your Comment</h1>
      <p>
        Join the conversation and contribute to our blog by adding your comment
        below. We value your thoughts, insights, and perspectives on the topics
        we cover. Share your feedback, ask questions, or provide additional
        information related to the blog post.
      </p>
      <form onSubmit={commentData}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={changeInput}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={changeInput}
          required
        />
        <textarea
          rows={9}
          cols={60}
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={changeInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Comments;
