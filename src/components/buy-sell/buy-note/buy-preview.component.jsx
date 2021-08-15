import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";

import BuyItem from "./buy-item.component";
import Pagination from "./../../common/pagination/pagination";

import setTotalNotes from "../../../redux/actions/buy-note.actions";

import "./buy-preview.css";

const BuyPreview = ({ currentUser, updateTotalNotes, totalNotes }) => {
  let componentMounted = useRef(true);
  const fetchData = async () => {
    const userToken = localStorage.getItem("token");
    return await axios.get("http://localhost:8000/note/get-note", {
      headers: { "x-auth-token": `${userToken}` },
    });
  };

  useEffect(() => {
    try {
      fetchData()
        .then(({ data }) => {
          const filteredNote = data.notesData.filter(
            (note) => note.user.toString() !== currentUser.id.toString()
          );
          if (componentMounted) {
            updateTotalNotes(filteredNote);
          }
        })
        .catch((error) => {
          if (error) throw new Error("Error fetching note.");
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      }
    }
    //runs-if-component-unmounts
    return () => {
      componentMounted.current = false;
    };
  }, [currentUser, updateTotalNotes]);
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
          <BuyItem item={note} key={note._id} currentUser={currentUser} />
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  totalNotes: state.buyNotes.totalNotes,
});

const mapDispatchToProps = (dispatch) => ({
  updateTotalNotes: (notes) => dispatch(setTotalNotes(notes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyPreview);
