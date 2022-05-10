import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Perfect Smooth - We make the future of the tech
      </h1>
      <p>
        Perfect Smooth Community make the world a better place with tech Stay
        connected
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfrLKFMjvbpHNRmMvbGlvsvBbthJgJSwdzHMpmSrLXWQFshjdZmHdsWZmCCKSJLctdwblq";
          }}
        >
          Get Started
        </button>
      </div>

      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
