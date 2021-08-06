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
        <CommonOption value="First" optionLabel="First Semester" />
        <CommonOption value="Second" optionLabel="Second Semester" />
        <CommonOption value="Third" optionLabel="Third Semester" />
        <CommonOption value="Fourth" optionLabel="Fourth Semester" />
        <CommonOption value="Fifth" optionLabel="Fifth Semester" />
        <CommonOption value="Sixth" optionLabel="Sixth Semester" />
        <CommonOption value="Seventh" optionLabel="Seventh Semester" />
        <CommonOption value="Eighth" optionLabel="Eighth Semester" />
      </select>
    </div>
  );
};

export default SemesterSelect;
