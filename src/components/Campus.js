import React from "react";
import "./regpage.css";
import img1 from "../images/img-01.png";
import img2 from "../images/img-02.png";
import logo from "../images/logo.png";

export const Campus = () => {
  return (
    <div className="reg-wrapper">
      <div className="reg-container">
        <div className="signup-container">
          <img className="logo-image" src={logo} alt="image not found" />
          <div className="input-container">
            <input type="text" placeholder=" " className="name-input" />
            <label className="name-label">Name</label>
          </div>
          <div className="input-container">
            <input type="email" placeholder=" " className="name-input" />
            <label className="name-label">Email</label>
          </div>
          <div className="signup-btn">
            <button class="signup-button">Submit</button>
          </div>
        </div>
        <div className="image-container">
          <img className="reg-bg-image" src={img2} alt="image not found" />
          <h1 className="reg-title">Register as Campus!</h1>
        </div>
      </div>
    </div>
  );
};
