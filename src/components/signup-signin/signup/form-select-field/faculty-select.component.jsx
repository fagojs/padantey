import React from "react";
import CommonOption from "./option-of-select/common-option";

import "./common-select-field.css";

const FacultySelect = ({ value, handleChange }) => {
  return (
    <div className="select-field">
      <label>Faculty</label>
      <select name="faculty" value={value} onChange={handleChange} required>
        <option value="" select="true" disabled>
          --Select Faculty--
        </option>
        <CommonOption value="bct" optionLabel="Computer Engineering" />
        <CommonOption value="bex" optionLabel="Electrical Engineering" />
        <CommonOption value="bge" optionLabel="Geomatics Engineering" />
        <CommonOption value="bce" optionLabel="Civil Engineering" />
        <CommonOption value="bme" optionLabel="Mechanical Engineering" />
      </select>
    </div>
  );
};

export default FacultySelect;
