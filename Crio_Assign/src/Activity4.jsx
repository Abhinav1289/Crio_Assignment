import React, { useState, useCallback, useEffect, useRef, memo } from 'react';
import Bulb from './components/Bulb';
import Checkbox from './components/Checkbox';
import Slider from './components/Slider';

function Activity4() {
  const [hide, setHide] = useState(false);
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [functionChanged, setFunctionChanged] = useState(false); // Track function change

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
     setHide((prev) => !prev);
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]); // Dependent on settings

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }, [password]);

  const prevRef = useRef();
  useEffect(() => {
    const isSameFunction = Object.is(prevRef.current, generatePassword);
    setFunctionChanged(isSameFunction); // Update state based on function instance change
    if (isSameFunction) {
      console.log("Same function instance: Function is reused from the cache.");
    } else {
      console.log("New function instance: Function was re-created.");
    }
    prevRef.current = generatePassword; // Update the reference to the current function
  }, [hide]); // Track changes in `generatePassword`

  // useEffect(() => {
  //   generatePassword();
  // }, [generatePassword]); // Automatically generate a password when settings change

  const handleLengthChange = useCallback((e) => {
    setLength(Number(e.target.value));
  }, []);

  const handleNumberAllowedChange = useCallback(() => {
    setNumberAllowed((prev) => !prev);
  }, []);

  const handleCharAllowedChange = useCallback(() => {
    setCharAllowed((prev) => !prev);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto shadow-2xl rounded-lg px-6 py-6 my-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-orange-400">
      <h1 className="text-white text-center text-3xl font-bold my-4">Password Generator</h1>
      
      <div className="flex justify-between mb-4">
        <div className="flex flex-col items-center gap-x-2">
          <Bulb isActive={functionChanged} /> {/* Left bulb shows function instance reuse */}
          <span className="text-white">Function Reuse</span>
          <p className='text-sm italic text-white'>(Using useCallBack)</p>
        </div>
        <div className="flex flex-col items-center gap-x-2">
          <Bulb isActive={!functionChanged} /> {/* Right bulb shows if function was re-created */}
          <span className="text-white">Function Created</span>
          <p className='text-sm italic text-white'>(Without useCallBack)</p>
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
    
    </div>
  );
}

export default Activity4;
