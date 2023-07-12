import React from "react";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="wrapper flex">
          <div className="logo">
            <NavLink className="logo-div" to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
            <NavLink to="/">
              <h1>Kenaz</h1>
            </NavLink>
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
