import React from "react";
import CommonOption from "./option-of-select/common-option";

const UniversitySelect = ({ label, name }) => {
  return (
    <div className="university-select">
      <label>{label}</label>
      <select name={name}>
        <CommonOption value="tu" optionLabel="Tribhuvan University" />
        <CommonOption value="ku" optionLabel="Kathmandu University" />
        <CommonOption value="pu" optionLabel="Pokhara University" />
      </select>
    </div>
  );
};

export default UniversitySelect;
