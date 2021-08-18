import React from "react";
import "./regpage.css";

export const InputComponent = ({
  labelValue,
  inputType,
  formikErr,
  formikVal,
  formikTouch,
  formikHandleChange,
  formikHandleBlur,
}) => {
  const labelLowerCase = labelValue.replace(/\s/g, "").toLowerCase();
  return (
    <div className="input-container">
      <input
        type={inputType}
        placeholder={labelValue}
        className="name-input"
        name={labelLowerCase}
        value={formikVal[labelLowerCase]}
        onChange={formikHandleChange}
        onBlur={formikHandleBlur}
      />
      <label className="name-label">{labelValue}</label>
      {formikTouch[labelLowerCase] && formikErr[labelLowerCase] ? (
        <div className="errors">{formikErr[labelLowerCase]}</div>
      ) : null}
    </div>
  );
};
