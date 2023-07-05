import React from "react";
import SideBar from "../components/SideSection/SideBar";
import SideSocial from "../components/SideSection/SideSocial";
import Video from "../components/SideSection/Video";
import Banners from "../components/SideSection/Banners";

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
          <Banners />
        </div>
      </div>
    </>
  );
}

export default SideSectionLayout;
