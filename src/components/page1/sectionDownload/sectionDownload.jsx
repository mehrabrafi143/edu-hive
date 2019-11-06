import React from "react";
import apple from "../../../assets/section-7/apple.png";
import google from "../../../assets/section-7/google.png";

const SectionDownload = () => {
  return (
    <div className="section padding-bottom-md">
      <div className="sectionDownload">
        <div className="sectionDownload__title">
          Download Eduhive for better study
        </div>
        <div className="sectionDownload__subtitle">
          Download the app for FREE now and learn from your favourite teachers
          &amp; coaching centers online.
        </div>

        <div className="sectionDownload__getLink">
          <p>Get SMS with link to download EduHive Andrioid App</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <span class="input-group-text text-secondary" id="basic-addon2">
                Get Link
              </span>
            </div>
          </div>
        </div>
        <div className="divider-text text-center">
          <span>or</span>
        </div>
        <div className="text-center sectionDownload__logos">
          <img src={google} alt="" />
          <img src={apple} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionDownload;
