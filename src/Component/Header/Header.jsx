import React from "react";
import './Header.css'
import nav_logo from '../images/nav_logo.png'

const Header = () => {
  return (
    <>
      <nav>
        <img src={nav_logo} alt="" />
        <h2>Keep</h2>
      </nav>
      <hr />
    </>
  );
};

export default Header;
