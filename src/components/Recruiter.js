import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./regpage.css";
import img2 from "../images/img-02.png";
import img4 from "../images/img-04.png";
import logo from "../images/logo.png";
import { locations } from "./locations";
import { InputComponent } from "./InputComponent";

export const Recruiter = () => {
  // const [skills, setSkills] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https:webpipl-api.webpipl.com/api/v1/skills/"
  //     );
  //     console.log("here is response: ", response);
  //     setSkills(response.data.result);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const initialValues = {
    name: "",
    email: "",
    phonenumber: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("Here is form data: ", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("* This field is required !"),
    email: Yup.string()
      .email("* Invalid email format !")
      .required("* This field is required !"),
    phonenumber: Yup.string().required("* This field is required !"),
    password: Yup.string().required("* This field is required !"),
  });

  const formik = useFormik({ initialValues, onSubmit, validationSchema });
  console.log("Here are the errors: ", formik.errors);

  return (
    <div className="reg-wrapper">
      <div className="reg-container">
        <div className="signup-container">
          <img className="logo-image" src={logo} alt="image not found" />
          <form onSubmit={formik.handleSubmit}>
            <InputComponent
              labelValue="Name"
              inputType="text"
              formikErr={formik.errors}
              formikVal={formik.values}
              formikTouch={formik.touched}
              formikHandleChange={formik.handleChange}
              formikHandleBlur={formik.handleBlur}
            />

            <InputComponent
              labelValue="Email"
              inputType="email"
              formikErr={formik.errors}
              formikVal={formik.values}
              formikTouch={formik.touched}
              formikHandleChange={formik.handleChange}
              formikHandleBlur={formik.handleBlur}
            />

            <InputComponent
              labelValue="Phone Number"
              inputType="text"
              formikErr={formik.errors}
              formikVal={formik.values}
              formikTouch={formik.touched}
              formikHandleChange={formik.handleChange}
              formikHandleBlur={formik.handleBlur}
            />
            <InputComponent
              labelValue="Password"
              inputType="password"
              formikErr={formik.errors}
              formikVal={formik.values}
              formikTouch={formik.touched}
              formikHandleChange={formik.handleChange}
              formikHandleBlur={formik.handleBlur}
            />
            <InputComponent
              labelValue="Add Skills"
              inputType="text"
              formikErr={formik.errors}
              formikVal={formik.values}
              formikTouch={formik.touched}
              formikHandleChange={formik.handleChange}
              formikHandleBlur={formik.handleBlur}
            />
            <InputComponent
              labelValue="Add Locations"
              inputType="text"
              formikErr={formik.errors}
              formikVal={formik.values}
              formikTouch={formik.touched}
              formikHandleChange={formik.handleChange}
              formikHandleBlur={formik.handleBlur}
            />
            <div className="signup-btn">
              <button class="signup-button" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="image-container">
          <img className="reg-bg-image" src={img4} alt="image not found" />
          <h1 className="reg-title">Register as Recruiter!</h1>
        </div>
      </div>
    </div>
  );
};
