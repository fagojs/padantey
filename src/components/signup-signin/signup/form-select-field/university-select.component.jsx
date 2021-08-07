import React from "react";

const UniversitySelect = ({ value, handleChange }) => {
  return (
    <div className="select-field">
      <label>University</label>
      <select name="university" value={value} onChange={handleChange} required>
        <option value="" select="true" disabled>
          --Select University--
        </option>
        <option value="Tribuvan University">Tribhuvan University</option>
        <option value="Kathmandu University">Kathmandu University</option>
        <option value="Pokhara University">Pokhara University</option>
      </select>
    </div>
  );
};

export default UniversitySelect;
