import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import { NavLink } from "react-router-dom";

function Header() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

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
            {isChecked && (
              <ul className="menu__box">
                <li>Media</li>
                <li>Marketing</li>
                <li>Contact</li>
              </ul>
            )}

            <ul>
              <li>Media</li>
              <li>Marketing</li>
              <li>Contact</li>
            </ul>
            <div className="search">
              <img src={Search} alt="logo" />
            </div>
            <input
              id="menu__toggle"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
