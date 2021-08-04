import React from "react";

import "./pagination.css";
const Pagination = ({ totalNotes, notesPerPage, currentPage, handleClick }) => {
  const totalCount = Math.ceil(totalNotes / notesPerPage);
  let pageNums = [];

  for (let i = 1; i <= totalCount; i++) {
    pageNums.push(i);
  }

  return (
    <div className="paginate-container">
      <ul className="paginate">
        {pageNums.map((page) => {
          return (
            <li
              key={page}
              onClick={() => handleClick(page)}
              className={`${page === currentPage ? "active-" : ""}page-link`}
            >
              {page}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
