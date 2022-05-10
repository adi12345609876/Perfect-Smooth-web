import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is Perfect Smooth?"
        text="we are a Tech company out there who make you're experience in the tech next level we offer you different levels of tech solutions which are unique."
      />
    </div>
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="Why Perfect Smooth?"
        text="You cannot learn and know every single tech out so our community help you to flourish in the new tech so Dont miss the future again"
      />
    </div>

    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        Our Achievement are beyond you're Imagination
      </h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="NFT" text="we are Making a wide range of Rare NFT " />
      <Feature
        title="Apps"
        text="We Are Making a wide range of app that change the future of this World like Sponcy"
      />
    </div>
  </div>
);

export default WhatGPT3;
