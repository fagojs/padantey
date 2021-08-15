import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartIcon from "../cart/cart-icon/cart-icon.component";
import { BsBook } from "react-icons/bs";

import "./header.css";

const Header = ({ currentUser }) => {
  return (
    <div className="header-container">
      <Link className="logo-container" to="/">
        <BsBook />
      </Link>
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
            <CartIcon currentUser={currentUser} />
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
