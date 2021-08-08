import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <h1>Logo</h1>
      </div>
      <div className="other-headers">
        <Link to="/" className="header">
          Dashboard
        </Link>
        <Link to="/buy-note" className="header">
          Buy-Note
        </Link>
        <Link to="/sell-note" className="header">
          Sell-Note
        </Link>
        <Link to="/signup" className="header">
          Register
        </Link>
        <Link to="/signin" className="header">
          Signin
        </Link>
      </div>
    </div>
  );
};

export default Header;
