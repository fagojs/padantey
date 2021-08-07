import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    //backend-call
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
        Not registered yet ? <a href="#">Sign Up</a>
      </p>
    </div>
  );
};

export default Signin;
