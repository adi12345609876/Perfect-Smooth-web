import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import Card from "./Card";

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Initial Release</h2>
          <p className="description">
            We have released four limited edition NFTs early which can be bid on
            via <a href="https://opensea.io/collection/fancy-lands">OpenSea</a>
          </p>
          <p className="description">
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="description">
            We ensured that they are Low and profitable
          </p>
          <a href="https://opensea.io/collection/fancy-lands" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
