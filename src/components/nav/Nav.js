import { React, useState } from "react";
import "./Nav.scss";
import logo from "../../logo.svg";
import { CgMenu } from 'react-icons/cg';

const Nav = () => {
  const [goTo, setGoTo] = useState("#");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <nav className="nav">
      <div
        className="nav__hamburger"
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      >
        <CgMenu />
      </div>

      <div className="nav__link">
        <a href={goTo} onClick={() => setGoTo("#")}>
          Home
        </a>
        <a href={goTo} onClick={() => setGoTo("#portfolio")}>
          Portfolio
        </a>
        <a href={goTo} onClick={() => setGoTo("#bio")}>
          Bio
        </a>
        <a href={goTo} onClick={() => setGoTo("#arsenal")}>
          Arsenal
        </a>
      </div>

      <img src={logo} alt="logo"></img>

      <div className="nav__link">
        <a href={goTo} onClick={() => setGoTo("#skills")}>
          Skills
        </a>
        <a href={goTo} onClick={() => setGoTo("#vouchers")}>
          Vouchers
        </a>
        <a href={goTo} onClick={() => setGoTo("#contact")}>
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Nav;
