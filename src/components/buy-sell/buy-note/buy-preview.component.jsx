import React, { useState } from "react";

import BuyItem from "./buy-item.component";
import Pagination from "./../../common/pagination/pagination";

import "./buy-preview.css";

const BuyPreview = ({ notes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [notesPerPage] = useState(6);
  const [totalNotes] = useState(notes);

  const lastIdx = currentPage * notesPerPage;
  const firstIdx = lastIdx - notesPerPage;
  const totalNotesToShow = totalNotes.slice(firstIdx, lastIdx);

  const handleClick = (pageNum) => {
    return setCurrentPage(pageNum);
  };

  return (
    <div className="buy-preview">
      <div className="buy-preview-items">
        {totalNotesToShow.map((note) => (
          <BuyItem item={note} key={note.id} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        notesPerPage={notesPerPage}
        totalNotes={totalNotes.length}
        handleClick={handleClick}
      />
    </div>
  );
};

export default BuyPreview;
