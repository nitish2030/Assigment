import React, { useState } from "react";

const Dropdown = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0] || "");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <select
      value={selectedOption}
      onChange={handleSelectChange}
      style={{
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "16px",
        backgroundColor: "#fff",
      }}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          Group By: {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
