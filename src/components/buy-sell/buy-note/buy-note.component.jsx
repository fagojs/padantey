import React from "react";

import BuyPreview from "./buy-preview.component";

const BuyNote = ({ currentUser }) => {
  return (
    <div className="buy-note-container">
      <BuyPreview currentUser={currentUser} />
    </div>
  );
};

export default BuyNote;
