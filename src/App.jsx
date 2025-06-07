import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`smooth-transition relative h-screen w-full flex flex-col justify-between overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-t from-custom-greypurple to-black"
          : "bg-white"
      }`}
    >
      <div className="flex flex-1 flex-row h-full space-x-4 pr-4">
        <Sidebar isDarkMode={isDarkMode} />
        <div className="w-full p-4 pt-6 pl-6 space-y-4">
          <div className="flex justify-end items-end">
            <Searchbar isDarkMode={isDarkMode} />
          </div>
          <div className="flex flex-1 w-full">
            <div
              className={`smooth-transition pt-10 font-bold text-2xl ${
                isDarkMode ? "text-white" : "text-white"
              }`}
            >
              Recent Journal
            </div>
          </div>
          <div
            className={`smooth-transition w-full min-h-[52rem] ring-1 ring-white/10 rounded-2xl shadow-lg ${
              isDarkMode ? "bg-custom-grey/75 backdrop-blur-lg" : "bg-white"
            }`}
          >
            meow
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
