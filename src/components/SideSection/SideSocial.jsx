import React from "react";

const data = [
  {
    id: 1,
    info: "25041 Fans",
    title: "Like",
    imageUrl: "src/assets/Facebook.jpg",
  },
  {
    id: 2,
    info: "25041 Followers",
    title: "Follow",
    imageUrl: "src/assets/Twitter.jpg",
  },
  {
    id: 3,
    info: "941 Subscribers",
    title: "Subscribe",
    imageUrl: "src/assets/YouTube.jpg",
  },
];

function SideSocial() {
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