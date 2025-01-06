import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
    console.log('Rendering Checkbox:', label);
    return (
      <div className="flex items-center gap-x-2">
        <input
          type="checkbox"
          checked={checked}
          className="cursor-pointer accent-blue-600"
          onChange={onChange}
        />
        <label className="text-white text-sm font-medium">{label}</label>
      </div>
    );
  };

export default Checkbox;