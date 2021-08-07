import React, { useState } from "react";

import CommonOption from "./option-of-select/common-option";

import "./common-select-field.css";

const SemesterSelect = ({ value, handleChange }) => {
  return (
    <div className="select-field">
      <label>Semester</label>
      <select name="semester" value={value} onChange={handleChange} required>
        <option value="" select="true" disabled>
          --Select Semester--
        </option>
        <option value="First">First Semester</option>
        <option value="Second">Second Semester</option>
        <option value="Third">Third Semester</option>
        <option value="Fourth">Fourth Semester</option>
        <option value="Fifth">Fifth Semester</option>
        <option value="Sixth">Sixth Semester</option>
        <option value="Seventh">Seventh Semester</option>
        <option value="Eighth">Eighth Semester</option>
      </select>
    </div>
  );
};

export default SemesterSelect;
