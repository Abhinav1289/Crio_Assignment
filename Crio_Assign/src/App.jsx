import React, { useState } from "react";
import Activity1 from "./Activity1";
import Activity2 from "./Activity2";
import Activity3 from "./Activity3";
import Activity4 from "./Activity4";

const App = () => {
  const [currentActivity, setCurrentActivity] = useState("Activity1");

  const renderActivity = () => {
    switch (currentActivity) {
      case "Activity1":
        return <Activity1 />;
      case "Activity2":
        return <Activity2 />;
      case "Activity3":
        return <Activity3 />;
      case "Activity4":
        return <Activity4 />;
      default:
        return <div className="text-center text-white">Select an activity to begin!</div>;
    }
  };

  return (
    <div className="min-h-screen w-screen    bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
       <header className=" shadow-lg py-4 px-6">
        <h1 className="text-md  text-center text-white italic">(I Have Divided the project activity wise and now working according to the respective activity)</h1>
      </header>

      <nav className="flex justify-center gap-4 py-4">
        <button
          onClick={() => setCurrentActivity("Activity1")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            currentActivity === "Activity1"
              ? "bg-green-500 text-white shadow-md"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Activity 1
        </button>
        <button
          onClick={() => setCurrentActivity("Activity2")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            currentActivity === "Activity2"
              ? "bg-green-500 text-white shadow-md"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Activity 2
        </button>
        <button
          onClick={() => setCurrentActivity("Activity3")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            currentActivity === "Activity3"
              ? "bg-green-500 text-white shadow-md"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Activity 3
        </button>
        <button
          onClick={() => setCurrentActivity("Activity4")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            currentActivity === "Activity4"
              ? "bg-green-500 text-white shadow-md"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Activity 4
        </button>
      </nav>


      <main className="py-8 px-4 max-w-4xl mx-auto">
       
        <div className="bg-gray-800 shadow-md rounded-lg p-6"> <h1 className="w-full flex justify-center items-center">{currentActivity}</h1>{renderActivity()}</div>
      </main>

      
    </div>
  );
};

export default App;
