import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../redux/addComment";
import Comment from "./Comment";

function Comments({ comments, articleID }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
    date: "",
    imageUrl: "/src/assets/avatar.jpg",
    articleID: articleID,
  });

  const dispatch = useDispatch();
  const reduxComments = useSelector((state) => state.addNewComment);

  useEffect(() => {
    const commentsForArticle = reduxComments.filter(
      (comment) => comment.articleID === articleID
    );

    if (commentsForArticle.length > 0) {
      const lastCommentId = Math.max(
        ...commentsForArticle.map((comment) => comment.id)
      );
      setFormData((prevFormData) => ({
        ...prevFormData,
        id: lastCommentId + 1,
        articleID,
      }));
    } else if (comments.length > 0) {
      const maxCommentId = Math.max(...comments.map((comment) => comment.id));
      setFormData((prevFormData) => ({
        ...prevFormData,
        id: maxCommentId + 1,
        articleID,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        id: 1,
        articleID,
      }));
    }
  }, [comments, articleID, reduxComments]);

  const commentData = (event) => {
    event.preventDefault();
    const currentDate = new Date();
    const formattedDate = currentDate
      .toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
      .replace("PM", "pm")
      .replace("AM", "am")
      .replace(" at", "");

    const newComment = { ...formData, date: formattedDate };
    dispatch(add(newComment));

    setFormData({
      name: "",
      email: "",
      content: "",
      date: "",
      imageUrl: "/src/assets/avatar.jpg",
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
        {comments
          .sort((a, b) => a.date - b.date)
          .map((item) => (
            <Comment
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              date={item.date}
              content={item.content}
            />
          ))}
        {reduxComments
          .filter((comment) => comment.articleID === articleID)
          .sort((a, b) => a.date - b.date)
          ?.map((item) => (
            <Comment
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              date={item.date}
              content={item.content}
            />
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
          name="content"
          placeholder="Comment"
          value={formData.content}
          onChange={changeInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Comments;
