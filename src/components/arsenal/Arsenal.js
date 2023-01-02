import React from "react";
import "../arsenal/Arsenal.scss";
import arsenalProfile from "../../images/bitmoji-4.png";

const Arsenal = () => {
  return (
    <section className="arsenal" id="arsenal">
      <div className="arsenal__header">
        <h1>My Arsenal</h1>
        <h2>Armories, Artileries and all those cool stuffs</h2>
      </div>

      <img src={arsenalProfile} alt="arsenal profile"></img>
    </section>
  );
};

export default Arsenal;
