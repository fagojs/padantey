import axios from "axios";
import React from "react";

import "./buy-item.css";
const BuyItem = ({ item, currentUser }) => {
  const { name, author, price, page, quality, description, _id } = item;

  const handleClick = async (nId, uId) => {
    //backend-call
    try {
      const reqData = {
        nId: nId,
        userId: uId,
      };
      const { data } = await axios.patch(
        "http://localhost:8000/cart/add-to-cart",
        reqData
      );
      console.log(data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <div className="buy-items">
      <div className="item-header">
        <span className="name">Name: {name}</span>

        <span className="author">Author: {author}</span>

        <span className="description">{description}</span>

        <span className="quality">Quality: {quality}</span>
      </div>
      <div className="item-footer">
        <span className="page">Page:{page}</span>
        <span className="price">Rs.{price}</span>
      </div>
      <div
        className="vertical-button"
        onClick={() => handleClick(_id, currentUser.id)}
      >
        <span>b</span>
        <span>u</span>
        <span>y</span>
      </div>
    </div>
  );
};

export default BuyItem;
