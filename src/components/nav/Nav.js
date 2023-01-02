import { React, useState } from "react";
import "./Nav.scss";
import logo from "../../logo.svg";

const Nav = () => {
  const [goTo, setGoTo] = useState("#");
  return (
    <nav className="nav">
      <div className="nav__hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="nav__link">
        <a
          href={goTo}
          onClick={() => setGoTo("#")}
        >
          Home
        </a>
        <a
          href={goTo}
          onClick={() => setGoTo("#portfolio")}
        >
          Portfolio
        </a>
        <a
          href={goTo}
          onClick={() => setGoTo("#bio")}
        >
          Bio
        </a>
        <a
          href={goTo}
          onClick={() => setGoTo("#arsenal")}
        >
          Arsenal
        </a>
      </div>

      <img className="nav__logo" src={logo} alt="logo"></img>

      <div className="nav__link">
        <a
          href={goTo}
          onClick={() => setGoTo("#skills")}
        >
          Skills
        </a>
        <a
          href={goTo}
          onClick={() => setGoTo("#vouchers")}
        >
          Vouchers
        </a>
        <a
          href={goTo}
          onClick={() => setGoTo("#contact")}
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Nav;
