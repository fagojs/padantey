import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import CartItem from "../cart-item/cart-item.component";

import "./cart-page.css";

const CartPage = () => {
  const [cartNotes, setCartNotes] = useState([]);
  let componentMount = useRef(true);
  useEffect(() => {
    const fetchData = async () => {
      const userToken = localStorage.getItem("token");
      return await axios.get("http://localhost:8000/cart/get-cart", {
        headers: { "x-auth-token": `${userToken}` },
      });
    };
    fetchData().then(({ data }) => {
      if (componentMount) {
        setCartNotes(data.cartDatas);
      }
    });
    return () => {
      componentMount.current = false;
    };
  }, []);
  return (
    <div className="cart-page">
      {cartNotes.length ? (
        cartNotes.map((note) => (
          <CartItem
            note={note.noteId}
            qty={note.quantity}
            key={note.noteId._id}
          />
        ))
      ) : (
        <div className="empty">
          <p>Your Cart Is Empty.</p>
          click{" "}
          <NavLink to="/buy-note" className="nav-link">
            here{" "}
          </NavLink>
          to add some
        </div>
      )}
    </div>
  );
};

export default CartPage;
