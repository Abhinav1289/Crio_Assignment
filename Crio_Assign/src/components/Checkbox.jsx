import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
    // Generate a unique id for each checkbox component
    const id = `checkbox-${label}`;

    console.log('Rendering Checkbox:', label);
    return (
      <div className="flex items-center gap-x-2">
        <input
          type="checkbox"
          id={id}  // unique id for the checkbox
          checked={checked}
          className="cursor-pointer accent-blue-600"
          onChange={onChange}
        />
        <label 
          htmlFor={id}  // associate label with the checkbox input
          className="text-white text-sm font-medium"
        >
          {label}
        </label>
      </div>
    );
};


export default Checkbox;