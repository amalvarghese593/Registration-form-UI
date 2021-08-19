import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./regpage.css";
import img4 from "../images/img-04.png";
import { locations } from "./locations";
import { InputComponent } from "./InputComponent";

export const JobSeeker = () => {
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
    addskills: Yup.string().required("* This field is required !"),
    addlocations: Yup.string().required("* This field is required !"),
  });

  const formik = useFormik({ initialValues, onSubmit, validationSchema });
  console.log("Here are the errors: ", formik.errors);
  const labelObj = [
    { labelValue1: "Name", inputType1: "text" },
    { labelValue1: "Email", inputType1: "email" },
    { labelValue1: "Phone Number", inputType1: "text" },
    { labelValue1: "Password", inputType1: "password" },
    // { labelValue1: "Add Skills", inputType1: "text" },
    // { labelValue1: "Add Locations", inputType1: "text" },
  ];

  return (
    <div className="reg-wrapper">
      <div className="reg-navbar">
        <h3>Navbar goes here</h3>
      </div>
      <div className="reg-container">
        <div className="signup-container">
          <form onSubmit={formik.handleSubmit}>
            {labelObj.map((item) => {
              return (
                <InputComponent
                  labelValue={item.labelValue1}
                  inputType={item.inputType1}
                  formikErr={formik.errors}
                  formikVal={formik.values}
                  formikTouch={formik.touched}
                  formikHandleChange={formik.handleChange}
                  formikHandleBlur={formik.handleBlur}
                />
              );
            })}
            <InputComponent
              labelValue="Add Skills"
              inputType="text"
              formikErr={formik.errors}
              formikVal={formik.values}
              formikTouch={formik.touched}
              formikHandleChange={formik.handleChange}
              formikHandleBlur={formik.handleBlur}
            />
            {/* datalist to be replaced here */}
            <InputComponent
              labelValue="Add Locations"
              inputType="text"
              formikErr={formik.errors}
              formikVal={formik.values}
              formikTouch={formik.touched}
              formikHandleChange={formik.handleChange}
              formikHandleBlur={formik.handleBlur}
            />
            {/* datalist to be replaced here */}

            <div className="signup-btn">
              <button class="signup-button">Sign Up</button>
            </div>
          </form>
        </div>
        <div className="image-container">
          <img className="reg-bg-image" src={img4} alt="image not found" />
          <h1 className="reg-title">Register as Job Seeker!</h1>
        </div>
      </div>
    </div>
  );
};
