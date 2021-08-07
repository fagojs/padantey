//import "../CSS/signup.css";
import React, { useState } from "react";

import FormInput from "../../common/form-input/form-input";
import FacultySelect from "./form-select-field/faculty-select.component";
import SemesterSelect from "./form-select-field/semester-select.component";
import UniversitySelect from "./form-select-field/university-select.component";
import CommonButton from "./../../common/commonbutton/common-button.component";

import "./signup.css";

const Signup = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
    college: "",
    university: "",
    faculty: "",
    semester: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //backend-call
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h1>PADANTEY</h1>
        <span>Register with given information.</span>
      </div>
      <form className="signup-form-container" onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <FormInput
          label="Contact-Number"
          type="number"
          name="contact"
          value={state.contact}
          onChange={handleChange}
        />
        <FormInput
          label="College"
          type="text"
          name="college"
          value={state.college}
          onChange={handleChange}
        />
        <UniversitySelect
          value={state.university}
          handleChange={handleChange}
        />
        <FacultySelect value={state.faculty} handleChange={handleChange} />
        <SemesterSelect value={state.semester} handleChange={handleChange} />
        <div className="register-button">
          <CommonButton type="submit">Register</CommonButton>
        </div>
      </form>
      <p>
        Already have an account ? <a href="#">Log In</a>
      </p>
    </div>
  );
};

export default Signup;
