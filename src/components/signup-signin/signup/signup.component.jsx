import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    //backend-call
    try {
      const userData = {
        username: state.username,
        email: state.email,
        password: state.password,
        contact: state.contact,
        college: state.college,
        university: state.university,
        faculty: state.faculty,
        semester: state.semester,
      };

      const { data } = await axios.post(
        "http://localhost:8000/new-user/register",
        userData
      );

      const userToken = data.token;
      localStorage.setItem("token", userToken);
      window.location = "/";
    } catch (error) {
      if (error.response) {
        const key = Object.keys(error.response.data)[0];
        alert(error.response.data[key]);
      }
    }
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
          handleChange={handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={state.email}
          handleChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={state.password}
          handleChange={handleChange}
        />
        <FormInput
          label="Contact-Number"
          type="number"
          name="contact"
          value={state.contact}
          handleChange={handleChange}
        />
        <FormInput
          label="College"
          type="text"
          name="college"
          value={state.college}
          handleChange={handleChange}
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
        Already have an account ?{" "}
        <NavLink to="/signin" className="nav-link">
          Login{" "}
        </NavLink>
        here.
      </p>
    </div>
  );
};

export default Signup;
