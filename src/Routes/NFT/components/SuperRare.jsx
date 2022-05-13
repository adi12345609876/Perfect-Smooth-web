import React from "react";
import Card from "./Card";
import release2 from "../assets/release2.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";

export default function SuperRare() {
  const data = [
    {
      image: release2,
      series: "Fancy Lands",
      title: "FarLands",
      price: 0.01,
      time: "Few",
    },
    {
      image: super2,
      series: "Fancy Lands",
      title: "Dream Land",
      price: 0.01,
      time: "Few",
    },
    {
      image: super3,
      series: "Fancy Lands",
      title: "Sky Lands",
      price: 0.01,
      time: "Few",
    },
    {
      image: super4,
      series: "Fancy Lands",
      title: "Soul Lands",
      price: 0.01,
      time: "Few",
    },
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Super Beautiful NFTs</h2>
        <p className="description">
          We have released four limited edition NFT's which can be brought via
          <a href="https://opensea.io/collection/fancy-lands">OpenSea</a>.
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
