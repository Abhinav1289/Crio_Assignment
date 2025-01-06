import React, { useState, useCallback, useEffect, useRef } from 'react';

// Bulb Component to display the light color
const Bulb = ({ isActive }) => {
  return (
    <div
      className={`w-6 h-6 rounded-full transition-all duration-300 ${
        isActive ? 'bg-green-500' : 'bg-red-500'
      }`}
      style={{ boxShadow: isActive ? '0 0 20px rgba(0,255,0,0.7)' : '0 0 20px rgba(255,0,0,0.7)' }}
    />
  );
};

const Checkbox = ({ label, checked, onChange }) => {
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

function Activity1() {
  const [hide, setHide] = useState(false);
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [functionChanged, setFunctionChanged] = useState(false);

  const passwordRef = useRef(null);

  // Password generation function
  function generatePassword() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  };

  // Effect to generate password when dependencies change
  const prevRef = useRef();
  useEffect(() => {
    const isSameFunction = Object.is(prevRef.current, generatePassword);
    setFunctionChanged(isSameFunction); // Set the function change status
    if (isSameFunction) {
      console.log("Same function instance: Function is reused from the cache.");
    } else {
      console.log("New function instance: Function was re-created.");
    }
    prevRef.current = generatePassword; // Update the ref to the current function
  }, [hide]); // Trigger the effect when the `hide` state changes
  
  const handleLengthChange = useCallback((e) => {
    setLength(Number(e.target.value));
  }, []);

  const handleNumberAllowedChange = useCallback(() => {
    setNumberAllowed((prev) => !prev);
  }, []);

  const handleCharAllowedChange = useCallback(() => {
    setCharAllowed((prev) => !prev);
  }, []);

  // Copy password to clipboard
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    // passwordRef.current?.select();
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-2xl rounded-lg px-6 py-6 my-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-orange-400">
      <h1 className="text-white text-center text-3xl font-bold my-4">Password Generator</h1>

      {/* Add bulbs showing function state */}
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-x-2">
          <Bulb isActive={functionChanged} /> {/* Left bulb shows function instance reuse */}
          <span className="text-white">Function Reuse</span>
        </div>
        <div className="flex items-center gap-x-2">
          <Bulb isActive={!functionChanged} /> {/* Right bulb shows if function was re-created */}
          <span className="text-white">Function Created</span>
        </div>
      </div>

      <div className="flex shadow-md rounded-lg overflow-hidden mb-6">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 text-lg bg-gray-800 text-orange-300 placeholder-orange-500"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 shrink-0 transition-all duration-200"
        >
          Copy
        </button>
      </div>
      
      

      <div className="flex flex-col gap-y-4">
        <Slider label="Length" value={length} onChange={handleLengthChange} />
        <Checkbox
          label="Include Numbers"
          checked={numberAllowed}
          onChange={handleNumberAllowedChange}
        />
        <Checkbox
          label="Include Special Characters"
          checked={charAllowed}
          onChange={handleCharAllowedChange}
        />
      </div>

      <button
        onClick={generatePassword}
        className="mt-6 w-full bg-green-600 hover:bg-green-500 text-white text-lg font-medium py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
      >
        Generate Password
      </button>
      <button
        onClick={() => setHide((prev) => !prev)}
        className="mt-6 w-full bg-green-600 hover:bg-green-500 text-white text-lg font-medium py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
      >
        Check Function Instance
      </button>
    </div>
  );
}

export default Activity1;
