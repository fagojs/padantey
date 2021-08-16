import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";

import DashboardPreview from "../dashboard-preview/dashboard-preview.component";
import { setSoldNotes } from "./../../../redux/actions/sold-note.actions";

import "./dashboard-page.css";

const DashboardPage = ({ currentUser, soldNotes, setSoldNotes }) => {
  let componentMount = useRef(true);

  const fetchData = async () => {
    const userToken = localStorage.getItem("token");
    return await axios.get("http://localhost:8000/note/get-note", {
      headers: { "x-auth-token": `${userToken}` },
    });
  };
  useEffect(() => {
    fetchData().then(({ data }) => {
      const filteredNote = data.notesData.filter(
        (note) => note.user.toString() === currentUser.id.toString()
      );
      if (componentMount) {
        setSoldNotes(filteredNote);
      }
    });

    return () => {
      componentMount.current = false;
    };
  }, [currentUser, setSoldNotes]);

  return (
    <div className="dashboard-container">
      {soldNotes && <DashboardPreview data={soldNotes} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  soldNotes: state.soldNotes.soldData,
});
const mapDispatchToProps = (dispatch) => ({
  setSoldNotes: (notes) => dispatch(setSoldNotes(notes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
