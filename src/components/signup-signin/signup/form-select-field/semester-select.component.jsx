import React from "react";

import CommonOption from "./option-of-select/common-option";

const SemesterSelect = ({ label, name }) => {
  return (
    <div className="semester-select">
      <label>{label}</label>
      <select name={name}>
        <CommonOption value="1" optionLabel="First Semester" />
        <CommonOption value="2" optionLabel="Second Semester" />
        <CommonOption value="3" optionLabel="Third Semester" />
        <CommonOption value="4" optionLabel="Fourth Semester" />
        <CommonOption value="5" optionLabel="Fifth Semester" />
        <CommonOption value="6" optionLabel="Sixth Semester" />
        <CommonOption value="7" optionLabel="Seventh Semester" />
        <CommonOption value="8" optionLabel="Eighth Semester" />
      </select>
    </div>
  );
};

export default SemesterSelect;
