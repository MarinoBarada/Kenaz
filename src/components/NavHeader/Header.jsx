import React from "react";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";

function Header() {
  return (
    <>
      <header>
        <div className="wrapper flex">
          <div className="logo">
            <a className="logo-div" href="">
              <img src={Logo} alt="logo" />
            </a>
            <a href="">
              <h1>Kenaz</h1>
            </a>
          </div>
          <div className="sub-nav">
            <ul>
              <li>Media</li>
              <li>Marketing</li>
              <li>Contact</li>
            </ul>
            <div className="search">
              <img src={Search} alt="logo" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
