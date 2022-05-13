import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  const links = [
    {
      title: "About",
      data: [
        { title: "About", url: "https://www.perfectsmooth.tk/" },
        { title: "Terms", url: "https://www.perfectsmooth.tk/" },
      ],
    },
    {
      title: "NFT",
      data: [{ title: "OpenSea", url: "https://opensea.io/PerfectSmooth" }],
    },

    {
      title: "Social",

      data: [
        { title: "Twitter", url: "https://twitter.com/PerfectSmooth" },
        {
          title: "Instagram",
          url: "https://www.instagram.com/perfectsmooth22/",
        },
      ],
    },
  ];
  const socialLink = [
    { data: <BsTwitter />, url: "https://twitter.com/PerfectSmooth" },
    {
      data: <BsInstagram />,
      url: "https://www.instagram.com/perfectsmooth22/",
    },
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Exclusive NFT Collection</p>
          <ul>
            {socialLink.map((link, index) => (
              <a href={link.url}>
                <li key={index}>{link.data}</li>
              </a>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <a href={link.url}>
                      <li key={index2}>{link.title}</li>
                    </a>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022 NFT</span>
        <span>Already Launched</span>
      </div>
    </footer>
  );
}
