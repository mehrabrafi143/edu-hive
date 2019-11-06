import React from "react";
import img from "../../../assets/section-6/img.png";
const SectionStart = () => {
  return (
    <div className="section sectionStart">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={img} alt="" />
          </div>
          <div className="col-6">
            <div className="sectionStart__title">Start EduHive from here</div>
            <div className="sectionStart__subtitle">
              Select and join the country's largest online learning platform and
              update your knowledge.
            </div>
            <div className="sectionStart__section">
              <p>I am the student of</p>
              <button className="btn btn-tansparent no-ml">JSC Exam</button>
              <button className="btn btn-tansparent">SSC Exam</button>
              <button className="btn btn-tansparent">HSC Exam</button>
            </div>
            <div className="divider-text">or</div>

            <div className="sectionStart__section">
              <p>I am taking preparation for</p>
              <button className="btn btn-tansparent no-ml">
                undergrad admission
              </button>
              <button className="btn btn-tansparent">job entrance</button>
            </div>
            <button className="btn btn-md btn-blue mt-4">
              Join For Learining
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionStart;
