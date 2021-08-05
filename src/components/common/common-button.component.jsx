import React from "react";

import "./common-button.css";
const CommonButton = ({ children, ...otherProps }) => {
  return (
    <button className="common-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CommonButton;
