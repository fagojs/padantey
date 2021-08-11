import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import CommonButton from "../../common/commonbutton/common-button.component";
import FormInput from "../../common/form-input/form-input";

import "./signin.css";

const Signin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
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
        email: state.email,
        password: state.password,
      };
      const { data } = await axios.post(
        "http://localhost:8000/user/login",
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
    <div className="signin-container">
      <div className="signin-header">
        <h1>PADANTEY</h1>
        <span>Login with given information.</span>
      </div>
      <form className="signin-form" onSubmit={handleSubmit}>
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
        <div className="signin-button">
          <CommonButton type="submit">Sign In</CommonButton>
        </div>
      </form>
      <p>
        Not registered yet ?{" "}
        <NavLink to="/signup" className="nav-link">
          Register{" "}
        </NavLink>
        here.
      </p>
    </div>
  );
};

export default Signin;
