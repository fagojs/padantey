import React from "react";

import DashboardItem from "./../../dashboard/dashboard-item/dashboard-item.component";

const BuyPreview = ({ notes }) => {
  return (
    <div className="note-preview">
      {notes.map((note) => (
        <div className="note-items" key={note.id}>
          <DashboardItem item={note} />
        </div>
      ))}
    </div>
  );
};

export default BuyPreview;
