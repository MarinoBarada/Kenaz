import React, { useState } from "react";
import Logo from "../../assets/blueLogo.png";
import Facebook from "../../assets/Facebook.jpg";
import Dribble from "../../assets/dribble.png";
import Linkedin from "../../assets/Linkedin.png";
import Rss from "../../assets/Rss.png";
import Skype from "../../assets/Skype.png";
import Twitter from "../../assets/Twitter.jpg";
import YouTube from "../../assets/YouTube.jpg";
import TwitterBird from "../../assets/twitter-bird.png";
import PostsContainer from "./PostsContainer";

function Footer() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const tags = [
    { title: "assueverit" },
    { title: "utroquoe" },
    { title: "probo" },
    { title: "assuev" },
    { title: "probo" },
    { title: "assueverit" },
    { title: "ittl" },
    { title: "assueverit" },
    { title: "assueverit" },
    { title: "utroquoe" },
    { title: "probo" },
    { title: "assueverit" },
    { title: "utroquoe" },
  ];

  const data = [
    {
      id: 1,
      name: "Envato",
      tag: "@envato",
      text: "Is this your typical million dollar day in the park? ttp://enva.to/150vxFC Happy @TrueThemes Day! #ThemeForest pic.twitter.com/EHz7awxOXy",
    },
    {
      id: 2,
      name: "Envato",
      tag: "@envato",
      text: "Happy TrueThemes Day http://enva.to/1dRzgLD",
    },
    {
      id: 3,
      name: "Envato",
      tag: "@envato",
      text: "@robscri I would really want to look into what's taking so long. Thank you ever so much! ^TC",
    },
  ];

  return (
    <>
      <footer>
        <div className="line-color"></div>
        <div className="wrapper">
          <div className="first-wrapper">
            <div className="social">
              <div className="logo">
                <img src={Logo} alt="logo" />
                <h1>Kenaz</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                leo ante.
              </p>
              <div className="social-icons">
                <img src={Rss} alt="Rss" />
                <img src={Facebook} alt="Facebook" />
                <img src={Twitter} alt="Twitter" />
                <img src={Dribble} alt="Dribble" />
                <img src={Linkedin} alt="Linkedin" />
                <img src={YouTube} alt="YouTube" />
                <img src={Skype} alt="Skype" />
              </div>
            </div>
            <div className="newsletter">
              <h1>Newsletter</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                leo ante.
              </p>
              <div className="subscribe">
                <input type="email" placeholder="Your mail" />
                <button>Subscribe</button>
              </div>
            </div>
            <div className="tags-widget">
              <h1>Tags Widget</h1>
              <div className="tags">
                {tags.map((item, index) => (
                  <div
                    key={index}
                    className={activeIndex === index ? "active" : ""}
                    onClick={() => handleItemClick(index)}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="second-wrapper">
            <PostsContainer title="Featured" />
            <PostsContainer title="Random Posts" />
            <div className="twitter-feed">
              <h1>Twitter Feed</h1>
              <div className="twitts">
                {data.map((item) => (
                  <div className="twitt" key={item.id}>
                    <div className="title">
                      <img src={TwitterBird} alt="TwitterBird" />
                      <span>{item.name}</span>
                      <p>{item.tag}</p>
                    </div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="wrapper bottom-wrapper">
            <p>
              © 2013 - Kenaz Template - Proudly made at Plava tvornica Croatia
            </p>
            <p>Typography - Templates - Contact Form - 404 Page</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
