import React from "react";

import { FaCartArrowDown } from "react-icons/fa";

import "./cart-icon.css";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <FaCartArrowDown className="cart-box" />
    </div>
  );
};

export default CartIcon;
