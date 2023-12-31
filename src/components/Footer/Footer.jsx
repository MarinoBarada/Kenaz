import React, { useState } from "react";
import Logo from "../../assets/blueLogo.png";
import Facebook from "../../assets/Facebook.svg";
import Dribble from "../../assets/Dribble.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Rss from "../../assets/Rss.svg";
import Skype from "../../assets/Skype.svg";
import Twitter from "../../assets/Twitter.svg";
import YouTube from "../../assets/YouTube.svg";
import TwitterBird from "../../assets/twitter-bird.png";
import PostsContainer from "./PostsContainer";
import { NavLink } from "react-router-dom";

function Footer() {
  const [activeDivs, setActiveDivs] = useState([]);

  const toggleClass = (divId) => {
    setActiveDivs((prevActiveDivs) => {
      if (prevActiveDivs.includes(divId)) {
        return prevActiveDivs.filter((id) => id !== divId);
      } else {
        return [...prevActiveDivs, divId];
      }
    });
  };

  const tags = [
    { title: "Breaking News" },
    { title: "Current Events" },
    { title: "Headlines" },
    { title: "Finance" },
    { title: "Economy" },
    { title: "Market Analysis" },
    { title: "Football" },
    { title: "Basketball" },
    { title: "Tennis" },
    { title: "Health" },
    { title: "Wellness" },
    { title: "Relationships" },
    { title: "Gadgets" },
    { title: "Innovation" },
    { title: "Adventure" },
    { title: "Destinations" },
    { title: "Vacation" },
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
              <NavLink className="logo" to="/">
                <img src={Logo} alt="logo" />
                <h1>Kenaz</h1>
              </NavLink>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                leo ante.
              </p>
              <div className="social-icons">
                <a href="" target="_blank">
                  <img src={Rss} alt="Rss" />
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <img src={Facebook} alt="Facebook" />
                </a>
                <a
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin"
                  target="_blank"
                >
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a href="https://dribbble.com/" target="_blank">
                  <img src={Dribble} alt="Dribble" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <img src={Linkedin} alt="Linkedin" />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                  <img src={YouTube} alt="YouTube" />
                </a>
                <a href="https://www.skype.com/en/" target="_blank">
                  <img src={Skype} alt="Skype" />
                </a>
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
                    className={`div ${
                      activeDivs.includes(item.title) ? "active" : ""
                    }`}
                    onClick={() => toggleClass(item.title)}
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
            <p>
              <a href="">Typography</a> - <a href="">Templates</a> -{" "}
              <a href="">Contact Form</a> - <a href="">404 Page</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
