import React from "react";

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
          <a href="">See all</a>
        </div>
        <div className={props.clasName}>{props.children}</div>
      </div>
    </div>
  );
}

export default ContainerCategoryLayout;
