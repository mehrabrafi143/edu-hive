import React from "react";
import icon1 from "../../../assets/section-3/icon_1.png";
import icon2 from "../../../assets/section-3/icon_2.png";
import icon3 from "../../../assets/section-3/icon_3.png";
import bg1 from "../../../assets/section-3/bg/group-1.png";
import bg2 from "../../../assets/section-3/bg/group-2.png";
import bg3 from "../../../assets/section-3/bg/group-3.png";
import bg4 from "../../../assets/section-3/bg/group-4.png";
import bg5 from "../../../assets/section-3/bg/group-5.png";
import bg6 from "../../../assets/section-3/bg/group-6.png";

const OurApproach = () => {
  return (
    <React.Fragment>
      <div className="section ourApproach">
        <div className="section__title">Our Approach to Better Preparation</div>
        <img src={bg1} className="ourApproach__icon ourApproach__icon-1" />
        <img src={bg2} className="ourApproach__icon ourApproach__icon-2" />
        <img src={bg3} className="ourApproach__icon ourApproach__icon-3" />
        <img src={bg4} className="ourApproach__icon ourApproach__icon-4" />
        <img src={bg5} className="ourApproach__icon ourApproach__icon-5" />
        <img src={bg6} className="ourApproach__icon ourApproach__icon-6" />
        <div className="container">
          <ul className="row ourApproach__list">
            <li className="mt-5 margin-right-ng-lg">
              <div className="ourApproach__list__content">
                <span className="ourApproach__list__content-num">1</span>
                <span className="ourApproach__list__content-title">
                  Prepare online anytime, anywhere
                </span>
              </div>
              <img src={icon1} alt="icon1" />
            </li>
            <li className="margin-left-lg">
              <img src={icon2} alt="icon2" className="margin-left-d " />
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
        <div className="text-center padding-tb">
          <button className="btn btn-md btn-blue btn-lg">
            Start Learining for Free
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OurApproach;
