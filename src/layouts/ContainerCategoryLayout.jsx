import React from "react";
import { Link } from "react-router-dom";

function ContainerCategoryLayout(props) {
  const style = {
    backgroundColor: props.color,
  };

  return (
    <div className="container">
      <div className="color-line" style={style}></div>
      <div className="info-wrapper">
        <div className="title">
          <h2>{props.title}</h2>
          <Link to={`/${props.title.toLowerCase()}`}>See all</Link>
        </div>
        <div className={props.clasName}>{props.children}</div>
      </div>
    </div>
  );
}

export default ContainerCategoryLayout;
