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
        <option value="bct">Computer Engineering</option>
        <option value="bec">Electrical Engineering</option>
        <option value="bge">Geomatics Engineering</option>
        <option value="bce">Civil Engineering</option>
        <option value="bme">Mechanical Engineering</option>
      </select>
    </div>
  );
};

export default FacultySelect;
