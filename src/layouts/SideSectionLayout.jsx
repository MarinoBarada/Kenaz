import React from "react";
import SideBar from "../components/SideSection/SideBar";
import SideSocial from "../components/SideSection/SideSocial";

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
        </div>
      </div>
    </>
  );
}

export default SideSectionLayout;
