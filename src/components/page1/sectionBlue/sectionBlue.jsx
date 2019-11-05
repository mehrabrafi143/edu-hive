import React from "react";
import icon1 from "../../../assets/section-2/icon_1.png";
import icon2 from "../../../assets/section-2/icon_2.png";
import icon3 from "../../../assets/section-2/icon_3.png";
import icon4 from "../../../assets/section-2/icon_4.png";

const SectionBlue = () => {
  return (
    <div className="sectionBlue">
      <div className="container">
        <ul className="row">
          <li className="sectionBlue__item no-ml">
            <div className="sectionBlue__item__icon">
              <img src={icon1} alt="" />
            </div>
            <div className="sectionBlue__item__content">
              <div className="sectionBlue__item__content-num">20,000+</div>
              <div className="sectionBlue__item__content-sub">
                Happy Students
              </div>
            </div>
          </li>
          <li className="sectionBlue__item">
            <div className="sectionBlue__item__icon">
              <img src={icon2} alt="" />
            </div>
            <div className="sectionBlue__item__content">
              <div className="sectionBlue__item__content-num">100+</div>
              <div className="sectionBlue__item__content-sub">
                Techers And Coaching Center
              </div>
            </div>
          </li>
          <li className="sectionBlue__item">
            <div className="sectionBlue__item__icon">
              <img src={icon3} alt="" />
            </div>
            <div className="sectionBlue__item__content">
              <div className="sectionBlue__item__content-num">500+</div>
              <div className="sectionBlue__item__content-sub">
                Well document cources
              </div>
            </div>
          </li>
          <li className="sectionBlue__item">
            <div className="sectionBlue__item__icon">
              <img src={icon4} alt="" />
            </div>
            <div className="sectionBlue__item__content">
              <div className="sectionBlue__item__content-num">2,50,000+</div>
              <div className="sectionBlue__item__content-sub">Questions</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionBlue;
