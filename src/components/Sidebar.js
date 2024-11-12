import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import "./Sidebar.css"; // Create this CSS file for custom styles if needed

const Sidebar = () => {
  return (
    <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="#about">
        About
      </a>
      <a id="gallery" className="menu-item" href="#gallery">
        Gallery
      </a>
      <a id="portfolio" className="menu-item" href="#portfolio">
        Portfolio
      </a>
      <a id="contact" className="menu-item" href="#contact">
        Contact
      </a>
    </Menu>
  );
};

export default Sidebar;
