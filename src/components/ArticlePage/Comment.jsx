import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { replay } from "../../redux/addReplay";
import CommentForm from "./CommentForm";

function Comment({
  commentID,
  imageUrl,
  name,
  date,
  content,
  articleID,
  children,
  commentReplay,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
    date: "",
    imageUrl: "/src/assets/avatar.jpg",
    articleID: articleID,
    commentID: commentID,
  });
  const [replayActive, setReplayActive] = useState(false);

  const dispatch = useDispatch();
  const reduxReplays = useSelector((state) => state.addReplay);

  useEffect(() => {
    const commentsForArticle = reduxReplays.filter(
      (comment) =>
        comment.articleID === articleID && comment.commentID === commentID
    );

    if (commentsForArticle.length > 0) {
      const lastCommentId = Math.max(
        ...commentsForArticle.map((comment) => comment.id)
      );
      setFormData((prevFormData) => ({
        ...prevFormData,
        id: lastCommentId + 1,
        commentID,
        articleID,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        id: 1,
        commentID,
        articleID,
      }));
    }
  }, [commentID, reduxReplays, commentReplay, articleID]);

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

    const newReplay = { ...formData, date: formattedDate };
    dispatch(replay(newReplay));

    setFormData({
      name: "",
      email: "",
      content: "",
      date: "",
      imageUrl: "/src/assets/avatar.jpg",
      articleID: articleID,
    });

    toggleVisibility();
  };

  function changeInput(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const toggleVisibility = () => {
    setReplayActive((prevReplayActive) => !prevReplayActive);
  };

  return (
    <>
      <div className="comment-replay-wrapper">
        <div className="comment" key={commentID}>
          <div className="image">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="content">
            <div className="info">
              <div className="name-date">
                <h2>{name}</h2>
                <p>{date}</p>
              </div>
              {!commentReplay && (
                <button onClick={toggleVisibility}>Replay</button>
              )}
            </div>
            <p>{content}</p>
          </div>
        </div>
        <div className="replay-wrapper">
          {children}
          {replayActive && (
            <CommentForm
              commentData={commentData}
              formData={formData}
              changeInput={changeInput}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Comment;
