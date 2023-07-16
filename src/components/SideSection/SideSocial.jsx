import React from "react";
import Facebook from "../../assets/Facebook.jpg";
import Twitter from "../../assets/Twitter.jpg";
import YouTube from "../../assets/YouTube.jpg";

function SideSocial() {
  const data = [
    {
      id: 1,
      info: "25041 Fans",
      title: "Like",
      imageUrl: Facebook,
    },
    {
      id: 2,
      info: "25041 Followers",
      title: "Follow",
      imageUrl: Twitter,
    },
    {
      id: 3,
      info: "941 Subscribers",
      title: "Subscribe",
      imageUrl: YouTube,
    },
  ];

  return (
    <div className="side-social">
      <h2>Social</h2>
      <div className="social-wrapper">
        {data.map((item) => (
          <div className="social" key={item.id}>
            <img src={item.imageUrl} alt="socialIcon" />
            <div className="lfs">{item.title}</div>
            <div className="info">
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideSocial;
