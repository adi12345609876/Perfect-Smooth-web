import React from "react";
import home from "../assets/home.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <h1 className="title">An NFT like no other</h1>
          <p className="description">
            Don't miss out on the release of our new NFT. Click the Get Button
            To get Some of the awesome NFTs
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://opensea.io/PerfectSmooth";
            }}
          >
            Get Now
          </button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
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
