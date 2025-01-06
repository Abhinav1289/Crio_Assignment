import React from "react";
const Slider = ({ label, value, onChange }) => {
    return (
      <div className="flex items-center justify-between">
        <label htmlFor="slider" className="text-white text-sm font-medium">
          {label}: {value}
        </label>
        <input
          type="range"
          min={6}
          max={100}
          value={value}
          className="cursor-pointer w-full accent-blue-600"
          onChange={onChange}
        />
      </div>
    );
  };

export default Slider;