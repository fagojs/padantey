import React, { useState } from "react";

import DashboardItem from "./dashboard-item.component.jsx";
import Pagination from "./../common/pagination";

import "./dashboard-preview.css";

const DashboardPreview = ({ data }) => {
  const { title, items } = data;
  const [currentPage, setCurrentPage] = useState(1);
  const [notesPerPage] = useState(3);
  const [totalNotes] = useState(items);

  const lastIdx = currentPage * notesPerPage;
  const firstIdx = lastIdx - notesPerPage;
  const notesToDisplay = totalNotes.slice(firstIdx, lastIdx);

  const handleClick = (pageNum) => setCurrentPage(pageNum);

  return (
    <div className="dashboard-preview">
      <span className="preview-title">{title}</span>
      <div className="preview-items">
        {notesToDisplay.map((note) => (
          <DashboardItem key={note.id} item={note} />
        ))}
      </div>
      <Pagination
        totalNotes={totalNotes.length}
        notesPerPage={notesPerPage}
        currentPage={currentPage}
        handleClick={handleClick}
      />
    </div>
  );
};

export default DashboardPreview;
