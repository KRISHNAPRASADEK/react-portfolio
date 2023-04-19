import React from "react";
import Hand from "../../assets/Hand";
import Send from "../../assets/Send";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Krishnaprasad
        <Hand />
      </h1>

      <h3 className="home__subtitle">MERN Stack Developer</h3>
      <p className="home__description">
        I'm creative designer based in New York, and I'm very passionate and
        dedicated to my work.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello <Send />
      </a>
    </div>
  );
};

export default Data;
