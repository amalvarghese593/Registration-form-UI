import React, { useState } from "react";
import { useFormik } from "formik";
import "./regpage.css";
import img2 from "../images/img-02.png";
import logo from "../images/logo.png";

export const Recruiter = () => {
  const initialValues = {
    Name: "",
    Email: "",
    Phone_Number: "",
    Password: "",
  };

  const onSubmit = (values) => {
    console.log("Here is form data: ", values);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.Name) {
      errors.Name = "* This field is required !";
    }
    if (!values.Email) {
      errors.Email = "* This field is required !";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = "* Invalid email format";
    }
    if (!values.Phone_Number) {
      errors.Phone_Number = "* This field is required !";
    }
    if (!values.Password) {
      errors.Password = "* This field is required !";
    }
    return errors;
  };

  const formik = useFormik({ initialValues, onSubmit, validate });
  console.log("Here are the errors: ", formik.errors);

  // const initialState = {
  //   Name: "",
  //   Email: "",
  //   Phone_Number: "",
  //   Password: "",
  // };
  // const [formData, setFormData] = useState(initialState);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   console.log("state changed: ", formData);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Here is form data: ", formData);
  // };

  return (
    <div className="reg-wrapper">
      <div className="reg-container">
        <div className="signup-container">
          <img className="logo-image" src={logo} alt="image not found" />
          <form onSubmit={formik.handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                placeholder=" "
                className="name-input"
                name="Name"
                value={formik.values.Name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="name-label">Name</label>
              {formik.touched.Name && formik.errors.Name ? (
                <div className="errors">{formik.errors.Name}</div>
              ) : null}
            </div>
            <div className="input-container">
              <input
                type="email"
                placeholder=" "
                className="name-input"
                name="Email"
                value={formik.values.Email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="name-label">Email</label>
              {formik.touched.Email && formik.errors.Email ? (
                <div className="errors">{formik.errors.Email}</div>
              ) : null}
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder=" "
                className="name-input"
                name="Phone_Number"
                value={formik.values.Phone_Number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="name-label">Phone Number</label>
              {formik.touched.Phone_Number && formik.errors.Phone_Number ? (
                <div className="errors">{formik.errors.Phone_Number}</div>
              ) : null}
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder=" "
                name="Password"
                value={formik.values.Password}
                className="name-input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="name-label">Password</label>
              {formik.touched.Password && formik.errors.Password ? (
                <div className="errors">{formik.errors.Password}</div>
              ) : null}
            </div>
            <div className="input-container">
              <input type="password" placeholder=" " className="name-input" />
              <label className="name-label">Add Skills</label>
            </div>
            <div className="input-container">
              <input type="password" placeholder=" " className="name-input" />
              <label className="name-label">Add Locations</label>
            </div>
            <div className="signup-btn">
              <button class="signup-button" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="image-container">
          <img className="reg-bg-image" src={img2} alt="image not found" />
          <h1 className="reg-title">Register as Recruiter!</h1>
        </div>
      </div>
    </div>
  );
};
