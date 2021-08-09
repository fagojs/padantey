import React from "react";

import { AiOutlineShopping } from "react-icons/ai";

import "./cart-icon.css";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <AiOutlineShopping className="cart-box" />
      <span className="quantity-label">0</span>
    </div>
  );
};

export default CartIcon;
