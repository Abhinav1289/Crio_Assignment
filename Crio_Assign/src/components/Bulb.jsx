import React from 'react'

const Bulb = ({ isActive }) => {
    return (
      <div
        className={`w-6 h-6 rounded-full transition-all duration-300 ${
          isActive ? 'bg-green-500' : 'bg-white'
        }`}
        style={{ boxShadow: isActive ? '0 0 20px rgba(0,255,0,0.7)' : '' }}
      />
    );
  };
export default Bulb