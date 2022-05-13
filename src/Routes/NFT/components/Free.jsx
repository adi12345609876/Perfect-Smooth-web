import React from "react";
import Card from "./Card";
import icon from "../assets/icon.png";
import super1 from "../assets/super1.png";
import release2 from "../assets/release2.png";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Profitable Beautiful NFT</h2>
          <p className="description">
            Buy Now and you'll get a Rare Profitable NFT
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Fancy Lands"
            title="Waste Lands"
            price={0.01}
            tag={12983}
            time={"Few"}
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Fancy Lands"
            title="Fancy Lands"
            price={0.01}
            tag="1"
            time={"Few"}
          />
        </div>
      </div>
    </div>
  );
}
