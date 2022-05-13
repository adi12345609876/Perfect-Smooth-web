import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don't miss out on the release of our new NFTs. Check Our open sea
            account and Get Beautiful NFT's
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">No Gas Fee</h2>
          <p className="description">
            We deployed our NFT on polygon so you're NFTs will be gas
          </p>
        </div>
      </div>
    </div>
  );
}
