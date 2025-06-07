import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import ThemedButton from "./components/ThemedButton";

import { Mic, Sparkles, Smile, Frown, Brain } from "lucide-react";

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
          {/* Searchbar */}
          <div className="flex justify-end items-end">
            <Searchbar isDarkMode={isDarkMode} />
          </div>

          {/* Header + Buttons Row */}
          <div className="flex justify-between pb-4 items-center w-full pt-6">
            <div
              className={`smooth-transition font-bold text-2xl ${
                isDarkMode ? "text-white/80" : "text-white"
              }`}
            >
              Recent Journal
            </div>

            <div className="flex gap-2">
              <ThemedButton
                text={"All"}
                icon={Sparkles}
                isDarkMode={isDarkMode}
              />
              <ThemedButton
                text={"Happy"}
                icon={Smile}
                isDarkMode={isDarkMode}
              />
              <ThemedButton text={"Sad"} icon={Frown} isDarkMode={isDarkMode} />
              <ThemedButton
                text={"Reflective"}
                icon={Brain}
                isDarkMode={isDarkMode}
              />
            </div>
          </div>

          <div
            className={`smooth-transition w-full min-h-[50rem] ring-1 ring-white/10 rounded-2xl shadow-lg ${
              isDarkMode ? "bg-custom-grey/75 backdrop-blur-lg" : "bg-white"
            }`}
          >
            meow
          </div>

          <button
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-custom-rpurple hover:bg-custom-rpurple/90 text-white shadow-lg transition-all duration-300"
            onClick={() => {
              console.log("Voice input clicked");
            }}
          >
            <Mic className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
