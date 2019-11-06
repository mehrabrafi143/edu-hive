import React from "react";
import youtube from "../../../assets/footer/youtube.png";
import linkedin from "../../../assets/footer/linkedin.png";
import facebook from "../../../assets/footer/facebook.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer__nav clearfix">
        <ul className="footer__left">
          <li>
            <a href="#" className="no-ml">
              Insights
            </a>
            <a href="#">Feedback</a>
            <a href="#">Support</a>
            <a href="#">Terms &amp; Privacy</a>
            <a href="#">Contact Us</a>
            <a href="#">Download App</a>
          </li>
        </ul>
        <ul className="footer__right">
          <li>
            <a href="#">
              <img src={youtube} alt="" />
            </a>
            <a href="#">
              <img src={linkedin} alt="" />
            </a>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="footer__copyright">
          &copy; 2019 Tech Hive Limited. All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
