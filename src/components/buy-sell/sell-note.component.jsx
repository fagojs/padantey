import React, { useState } from "react";

import FormInput from "../../components/common/form-input";
import CommonButton from "../common/common-button.component";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    setState({
      ...state,
      name: "",
      author: "",
      description: "",
      quality: "",
      page: 0,
      price: 0,
      date: Date.now(),
    });
    //backend-call
  };

  return (
    <div className="sell-note-container">
      <form className="sell-form" onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          name="name"
          type="text"
          value={state.name}
          onChange={handleChange}
        />
        <FormInput
          label="Author"
          name="author"
          type="text"
          value={state.author}
          onChange={handleChange}
        />
        <FormInput
          label="Description"
          name="description"
          type="text"
          value={state.description}
          onChange={handleChange}
        />
        <FormInput
          label="Quality"
          name="quality"
          type="text"
          value={state.quality}
          onChange={handleChange}
        />
        <FormInput
          label="Page"
          name="page"
          type="number"
          min="1"
          value={state.page}
          onChange={handleChange}
        />
        <FormInput
          label="Price(in-rupees)"
          name="price"
          type="number"
          min="1"
          value={state.price}
          onChange={handleChange}
        />
        <FormInput
          label="Date"
          name="date"
          type="date"
          value={state.date}
          onChange={handleChange}
        />
        <div className="sell-button">
          <CommonButton type="submit">SELL</CommonButton>
        </div>
      </form>
    </div>
  );
};

export default SellNote;
