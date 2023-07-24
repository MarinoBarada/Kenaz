import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../redux/addComment";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function Comments({ comments, articleID }) {
  const commentsRef = useRef(null);
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
  const reduxReplays = useSelector((state) => state.addReplay);

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
  }, [comments, articleID, reduxComments, reduxReplays]);

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

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  function changeInput(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="comments-container">
      <h1>Comments</h1>
      <div className="comments-wrapper" ref={commentsRef}>
        {comments
          .sort((a, b) => a.date - b.date)
          .map((item) => (
            <Comment
              key={item.id}
              commentID={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              date={item.date}
              content={item.content}
              articleID={articleID}
            >
              {reduxReplays
                .filter(
                  (comment) =>
                    comment.articleID === articleID &&
                    comment.commentID === item.id
                )
                .sort((a, b) => a.date - b.date)
                ?.map((item) => (
                  <Comment
                    key={item.id}
                    commentID={item.id}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    date={item.date}
                    content={item.content}
                    articleID={articleID}
                    commentReplay={true}
                  />
                ))}
            </Comment>
          ))}
        {reduxComments
          .filter((comment) => comment.articleID === articleID)
          .sort((a, b) => a.date - b.date)
          ?.map((item) => (
            <Comment
              key={item.id}
              commentID={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              date={item.date}
              content={item.content}
              articleID={articleID}
            >
              {reduxReplays
                .filter(
                  (comment) =>
                    comment.articleID === articleID &&
                    comment.commentID === item.id
                )
                .sort((a, b) => a.date - b.date)
                ?.map((item) => (
                  <Comment
                    key={item.id}
                    commentID={item.id}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    date={item.date}
                    content={item.content}
                    articleID={articleID}
                    commentReplay={true}
                  />
                ))}
            </Comment>
          ))}
      </div>
      <h1 className="add-comment">Add Your Comment</h1>
      <p>
        Join the conversation and contribute to our blog by adding your comment
        below. We value your thoughts, insights, and perspectives on the topics
        we cover. Share your feedback, ask questions, or provide additional
        information related to the blog post.
      </p>
      <CommentForm
        commentData={commentData}
        formData={formData}
        changeInput={changeInput}
      />
    </div>
  );
}

export default Comments;
