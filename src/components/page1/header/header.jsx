import React from "react";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand header__logo" href="#">
          <img src={logo} alt="eduhive" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav header__nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i className="fa fa-search"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Exam
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <ul>
                <li className="nav-item">
                  <a href="#" class="nav-link">
                    Log In
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" class="nav-link btn btn-primary">
                    Register
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
