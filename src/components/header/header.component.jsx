import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "../cart/cart-icon/cart-icon.component";

import "./header.css";

const Header = ({ currentUser }) => {
  //console.log(currentUser);
  return (
    <div className="header-container">
      <div className="logo-container">
        <h1>Logo</h1>
      </div>
      <div className="other-headers">
        <Link to="/" className="header">
          Dashboard
        </Link>
        {currentUser ? (
          <React.Fragment>
            <Link to="/buy-note" className="header">
              Buy-Note
            </Link>
            <Link to="/sell-note" className="header">
              Sell-Note
            </Link>
            <Link
              to="/logout"
              className="header"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>Logout</span>
              <span
                style={{
                  fontWeight: "normal",
                  fontSize: "0.8rem",
                }}
              >
                {currentUser.username}
              </span>
            </Link>
            <CartIcon />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/signup" className="header">
              Register
            </Link>
            <Link to="/signin" className="header">
              Signin
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Header;
