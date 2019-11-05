import React from "react";
import icon1 from "../../../assets/section-1/icon_1.png";
import icon2 from "../../../assets/section-1/icon_2.png";
import icon3 from "../../../assets/section-1/icon_3.png";
import icon4 from "../../../assets/section-1/icon_4.png";

const Section1 = () => {
  return (
    <div className="section section1">
      <div className="container">
        <div className="section__title">
          A Complete Preparation for Your Exam
        </div>
        <ul className="row section1__items">
          <li className="section1__item no-ml">
            <div className="section1__item__icon">
              <img src={icon1} alt="" />
            </div>
            <div className="section1__item__title">Model tests</div>
            <div className="section1__item__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </div>
          </li>
          <li className="section1__item">
            <div className="section1__item__icon">
              <img src={icon2} alt="" />
            </div>
            <div className="section1__item__title">Model tests</div>
            <div className="section1__item__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </div>
          </li>
          <li className="section1__item">
            <div className="section1__item__icon">
              <img src={icon3} alt="" />
            </div>
            <div className="section1__item__title">Model tests</div>
            <div className="section1__item__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </div>
          </li>
          <li className="section1__item">
            <div className="section1__item__icon">
              <img src={icon4} alt="" />
            </div>
            <div className="section1__item__title">Model tests</div>
            <div className="section1__item__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section1;
