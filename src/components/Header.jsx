import React from "react";
import Logo from "../assets/logo.svg";
import Search from "../assets/search.svg";

function Header() {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="logo">
            <div className="logo-div">
              <img src={Logo} alt="logo" />
            </div>
            <h1>Kenaz</h1>
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
