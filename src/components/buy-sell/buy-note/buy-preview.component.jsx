import React, { useState, useEffect } from "react";
import axios from "axios";

import BuyItem from "./buy-item.component";
import Pagination from "./../../common/pagination/pagination";

import "./buy-preview.css";

const BuyPreview = ({ currentUser }) => {
  const [totalNotes, setTotalNotes] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const userToken = localStorage.getItem("token");
        const data = await axios.get("http://localhost:8000/note/get-note", {
          headers: { "x-auth-token": `${userToken}` },
        });
        return data;
      };
      fetchData()
        .then(({ data }) => {
          const filteredNote = data.notesData.filter(
            (note) => note.user.toString() !== currentUser.id.toString()
          );
          setTotalNotes(filteredNote);
        })
        .catch((err) => {
          if (err) throw err;
        });
    } catch (error) {
      if (error.response) {
        alert(error.response.message);
      }
    }
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [notesPerPage] = useState(6);

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
