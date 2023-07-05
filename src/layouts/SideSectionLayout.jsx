import React from "react";
import SideBar from "../components/SideSection/SideBar";
import SideSocial from "../components/SideSection/SideSocial";
import Video from "../components/SideSection/Video";

function SideSectionLayout(props) {
  return (
    <>
      <div className="news-sidebar-wrapper">
        <div className="news-wrapper">
            {props.children}
        </div>
        <div className="side-wrapper flex-column">
          <SideBar />
          <SideSocial />
          <Video />
        </div>
      </div>
    </>
  );
}

export default SideSectionLayout;
