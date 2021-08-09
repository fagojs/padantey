import React, { useState } from "react";
import axios from "axios";

import FormInput from "../../common/form-input/form-input";
import CommonButton from "../../common/commonbutton/common-button.component";
import "./sell-note.css";

const SellNote = () => {
  const [state, setState] = useState({
    name: "",
    author: "",
    description: "",
    quality: "",
    page: 0,
    price: 0,
    date: Date.now(),
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //backend-call
    try {
      const noteData = {
        name: state.name,
        author: state.author,
        description: state.description,
        quality: state.quality,
        page: state.page,
        price: state.price,
        date: state.date,
      };
      const userToken = localStorage.getItem("token");
      if (!userToken) {
        alert("Have You Registered ?");
        window.location = "/signin";
      }

      const note = await axios.post(
        "http://localhost:8000/note/add-note",
        noteData,
        { headers: { "x-auth-token": `${userToken}` } }
      );
      window.location = "/";
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      }
    }
  };

  return (
    <div className="sell-note-container">
      <h2 align="center" style={{ marginBottom: "2.5rem", marginTop: "0" }}>
        Place Your Note Details
      </h2>
      <form className="sell-form" onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          name="name"
          type="text"
          value={state.name}
          handleChange={handleChange}
        />
        <FormInput
          label="Author"
          name="author"
          type="text"
          value={state.author}
          handleChange={handleChange}
        />
        <FormInput
          label="Description"
          name="description"
          type="text"
          value={state.description}
          handleChange={handleChange}
        />
        <FormInput
          label="Quality"
          name="quality"
          type="text"
          value={state.quality}
          handleChange={handleChange}
        />
        <FormInput
          label="Page"
          name="page"
          type="number"
          min="1"
          value={state.page}
          handleChange={handleChange}
        />
        <FormInput
          label="Price(in-rupees)"
          name="price"
          type="number"
          min="1"
          value={state.price}
          handleChange={handleChange}
        />
        <FormInput
          label="Date"
          name="date"
          type="date"
          value={state.date}
          handleChange={handleChange}
        />
        <div className="sell-button">
          <CommonButton type="submit">SELL</CommonButton>
        </div>
      </form>
    </div>
  );
};

export default SellNote;
