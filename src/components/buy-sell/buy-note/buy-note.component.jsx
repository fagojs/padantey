import React from "react";

import BUY_DATA from "../../../assets/buy-data";
import BuyPreview from "./buy-preview.component";

const BuyNote = () => {
  const { items } = BUY_DATA[0];
  return (
    <div className="buy-note-container">
      <BuyPreview notes={items} />
    </div>
  );
};

export default BuyNote;
