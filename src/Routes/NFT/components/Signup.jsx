import React from "react";
import signup from "../assets/signup.png";
export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          {/* <p className="sub-title">Launching Soon</p> */}
          <h1 className="title">An NFT like no other</h1>
          <p className="description">
            Don't miss out our Cool NFT Check Get It Now at Open sea
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://opensea.io/collection/fancy-lands";
            }}
          >
            Get Now
          </button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
