import React from "react";
import SideBar from "../components/SideSection/SideBar";

function SideSectionLayout(props) {
  return (
    <>
      <div className="news-sidebar-wrapper">
        <div className="news-wrapper">
            {props.children}
        </div>
        <div className="side-wrapper flex-column">
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default SideSectionLayout;
