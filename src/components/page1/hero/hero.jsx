import React from "react";
import heroImg from "../../../assets/hero/graphic.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-6 hero__content">
            <div className="hero__title">
              Excel your learning from anywhere, anytime
            </div>
            <div className="hero__subtitle">SSC | HSC | Job</div>
            <button className="btn btn-md btn-blue mt-4">
              Join For Learining
            </button>
          </div>
          <div className="col-6 hero__img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
