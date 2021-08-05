import React from "react";

import "./buy-item.css";
const BuyItem = ({ item }) => {
  const { name, author, price, page, quality, description } = item;

  const handleClick = () => {
    alert("hello-buyer");
    //backend-call
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
      <div className="vertical-button" onClick={handleClick}>
        <span>b</span>
        <span>u</span>
        <span>y</span>
      </div>
    </div>
  );
};

export default BuyItem;
