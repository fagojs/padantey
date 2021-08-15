import axios from "axios";
import React from "react";

import "./cart-item.css";

const CartItem = ({ note, qty }) => {
  const { name, price, author } = note;

  const handleRemoveCart = async (id) => {
    const userToken = localStorage.getItem("token");
    return await axios.delete(`http://localhost:8000/cart/delete-note/${id}`, {
      headers: { "x-auth-token": `${userToken}` },
    });
  };

  return (
    <div className="cart-item-container">
      <div className="note-face">
        <span className="name">{name}</span>
        <span className="author">{author}</span>
      </div>
      <span className="price">Rs.{price}</span>

      <span className="quantity">
        Qty:
        <span className="arrow">&#10094;</span>
        {qty}
        <span className="arrow">&#10095;</span>
      </span>
      <span
        className="remove-note"
        onClick={() => {
          handleRemoveCart(note._id);
          window.location = "/cart-page";
        }}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CartItem;
