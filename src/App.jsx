import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import ThemedButton from "./components/ThemedButton";
import JournalLog from "./components/JournalLog";
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
          <div className="flex justify-end items-end">
            <Searchbar isDarkMode={isDarkMode} />
          </div>

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
            className={`smooth-transition p-4 w-full h-[49rem] ring-1 ring-white/10 rounded-2xl shadow-lg overflow-y-auto space-y-4 ${
              isDarkMode ? "bg-custom-grey/75 backdrop-blur-lg" : "bg-white"
            }`}
          >
            <JournalLog
              date="April 25, 2024 1:24 PM"
              mood="Happy"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada."
              isDarkMode={isDarkMode}
            />
            <JournalLog
              date="April 24, 2024 10:00 AM"
              mood="Sad"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              isDarkMode={isDarkMode}
            />
            <JournalLog
              date="April 23, 2024 8:45 PM"
              mood="Reflective"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
              isDarkMode={isDarkMode}
            />
            <JournalLog
              date="April 22, 2024 5:12 PM"
              mood="Happy"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
              isDarkMode={isDarkMode}
            />
            <JournalLog
              date="April 21, 2024 2:30 PM"
              mood="Sad"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
              isDarkMode={isDarkMode}
            />
            <JournalLog
              date="April 20, 2024 6:00 PM"
              mood="Reflective"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
              isDarkMode={isDarkMode}
            />
            <JournalLog
              date="April 19, 2024 4:15 PM"
              mood="Happy"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla."
              isDarkMode={isDarkMode}
            />
            <JournalLog
              date="April 18, 2024 7:30 AM"
              mood="Reflective"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis."
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
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
  );
};

export default App;
