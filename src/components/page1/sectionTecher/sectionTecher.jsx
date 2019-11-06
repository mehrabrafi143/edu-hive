import React from "react";
import img1 from "../../../assets/section-5/img1.png";
import img2 from "../../../assets/section-5/img2.png";
import img3 from "../../../assets/section-5/img3.png";
import img4 from "../../../assets/section-5/img4.png";
import img5 from "../../../assets/section-5/img5.png";
import img6 from "../../../assets/section-5/img6.png";
const SectionTecher = () => {
  return (
    <div className="section sectionTecher">
      <div className="section__title">Eduhive Teachers &amp; Institute</div>
      <div className="margin-top-ng section__subtitle">
        Get best content provided by the renowed techers and institudes around
        the country
      </div>
      <div className="sectionTecher__btnGroup">
        <div className="btn btn-skyish">Institute</div>
        <div className="btn btn-white">Teacher</div>
      </div>
      <ul className="sectionTecher__icons">
        <li>
          <img src={img1} alt="" />
        </li>
        <li>
          <img src={img2} alt="" />
        </li>
        <li>
          <img src={img3} alt="" />
        </li>
        <li>
          <img src={img4} alt="" />
        </li>
        <li>
          <img src={img5} alt="" />
        </li>
        <li>
          <img src={img6} alt="" />
        </li>
      </ul>
      <div className="text-center padding-top-md">
        <button className="btn btn-md btn-blue btn-lg">
          Start Learining for Free
        </button>
      </div>
    </div>
  );
};

export default SectionTecher;
