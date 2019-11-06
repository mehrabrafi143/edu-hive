import React from "react";
import img1 from "../../../assets/section-4/img_1.png";
import img2 from "../../../assets/section-4/img_2.png";
import img3 from "../../../assets/section-4/img_3.png";

const SectionProud = () => {
  return (
    <div className="section">
      <div className="section-title"></div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="sectionProud__card">
              <div className="sectionProud__img">
                <img src={img1} alt="" />
              </div>
              <div className="sectionProud__content">
                <div className="sectionProud__card__des">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,when an unknown
                  printer took
                </div>
                <div className="sectionProud__identity">
                  <div className="sectionProud__card__name">Nabir</div>
                  <div className="sectionProud__card__address">
                    Dhaka Unitversity D unit
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="sectionProud__card">
              <div className="sectionProud__img">
                <img src={img2} alt="" />
              </div>
              <div className="sectionProud__content">
                <div className="sectionProud__card__des">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,when an unknown
                  printer took
                </div>
                <div className="sectionProud__identity">
                  <div className="sectionProud__card__name">Nabir</div>
                  <div className="sectionProud__card__address">
                    Dhaka Unitversity D unit
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="sectionProud__card">
              <div className="sectionProud__img">
                <img src={img3} alt="" />
              </div>
              <div className="sectionProud__content">
                <div className="sectionProud__card__des">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,when an unknown
                  printer took
                </div>
                <div className="sectionProud__identity">
                  <div className="sectionProud__card__name">Nabir</div>
                  <div className="sectionProud__card__address">
                    Dhaka Unitversity D unit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionProud;
