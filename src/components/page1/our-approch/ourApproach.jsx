import React from "react";
import icon1 from "../../../assets/section-3/icon_1.png";
import icon2 from "../../../assets/section-3/icon_2.png";
import icon3 from "../../../assets/section-3/icon_3.png";

const OurApproach = () => {
  return (
    <div className="section ourApproach">
      <div className="section__title">Our Approach to Better Preparation</div>
      <div className="container">
        <ul className="row ourApproach__list">
          <li>
            <div className="ourApproach__list__content">
              <span className="ourApproach__list__content-num">1</span>
              <span className="ourApproach__list__content-title">
                Prepare online anytime, anywhere
              </span>
            </div>
            <img src={icon1} alt="icon1" />
          </li>
          <li>
            <img src={icon2} alt="icon2" />
            <div className="ourApproach__list__content">
              <span className="ourApproach__list__content-num">2</span>
              <span className="ourApproach__list__content-title ourApproach__list__content-title-right">
                Get instant result and solution
              </span>
            </div>
          </li>
          <li>
            <div className="ourApproach__list__content">
              <span className="ourApproach__list__content-num">3</span>
              <span className="ourApproach__list__content-title">
                Get position amnong the thousand of students
              </span>
            </div>
            <img src={icon3} alt="icon3" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurApproach;
