import React from "react";
import CommonOption from "./option-of-select/common-option";

const UniversitySelect = ({ value, handleChange }) => {
  return (
    <div className="select-field">
      <label>University</label>
      <select name="university" value={value} onChange={handleChange} required>
        <option value="" select="true" disabled>
          --Select University--
        </option>
        <CommonOption
          value="Tribhuvan University"
          optionLabel="Tribhuvan University"
        />
        <CommonOption
          value="Kathmandu University"
          optionLabel="Kathmandu University"
        />
        <CommonOption
          value="Pokhara University"
          optionLabel="Pokhara University"
        />
      </select>
    </div>
  );
};

export default UniversitySelect;
