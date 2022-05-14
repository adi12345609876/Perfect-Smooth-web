import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is Perfect Smooth?</a>
          </p>
          <p>
            <a href="#possibility">Perfect Smooth</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <NavLink to={"/NFT"} type="button" className="gpt3__navbar-sign">
          NFTs
        </NavLink>
        {/* <button type="button">NFTs</button> */}
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is Perfect Smooth</a>
              </p>
              <p>
                <a href="#features">Possibility</a>
              </p>
              <p>
                <a href="#possibility">Future</a>
              </p>
              {/* <p>
                <a href="#blog">Library</a>
              </p> */}
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <NavLink
                to={"/NFT"}
                type="button"
                className="gpt3__navbar-menu_container-links-sign"
              >
                NFTs
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
