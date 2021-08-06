import React from "react";
import CommonOption from "./option-of-select/common-option";

const FacultySelect = ({ label, name }) => {
  return (
    <div className="faculty-select">
      <label>{label}</label>
      <select name={name}>
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
