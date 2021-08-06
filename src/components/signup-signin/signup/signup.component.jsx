//import "../CSS/signup.css";
import React, { useState } from "react";

import FormInput from "../../common/form-input/form-input";
import FacultySelect from "./form-select-field/faculty-select.component";
import SemesterSelect from "./form-select-field/semester-select.component";
import UniversitySelect from "./form-select-field/university-select.component";
import CommonButton from "./../../common/commonbutton/common-button.component";

import "./signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-header">
        <h1>PADANTEY</h1>
        <span>Register with given information.</span>
      </div>
      <form className="signup-form-container">
        <FormInput label="Username" type="text" name="username" />
        <FormInput label="Email" type="email" name="email" />
        <FormInput label="Password" type="password" name="password" />
        <FormInput label="Contact-Number" type="number" name="contact" />
        <FormInput label="College" type="text" name="college" />
        <UniversitySelect label="University" name="university" />
        <FacultySelect label="Faculty" name="faculty" />
        <SemesterSelect label="Semester" name="semester" />
        <div className="register-button">
          <CommonButton>Register</CommonButton>
        </div>
      </form>
      <p>
        Already have an account ? <a href="#">Log In</a>
      </p>
    </div>
  );
};

export default Signup;
