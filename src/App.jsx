import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import ThemedButton from "./components/ThemedButton";
import JournalLog from "./components/JournalLog";
import MicButton from "./components/MicButton";

import journalEntries from "./data/journalEntries";

import { Sparkles, Smile, Frown, Brain } from "lucide-react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [expandedEntry, setExpandedEntry] = useState(null);
  const [filter, setFilter] = useState("all");

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const filteredEntries = journalEntries.filter((entry) => {
    if (filter === "all") return true;
    return entry.mood?.toLowerCase() === filter;
  });

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
          <div className="relative h-16 flex justify-end items-start pr-4">
            <AnimatePresence mode="wait">
              {!expandedEntry && (
                <motion.div
                  key="searchbar"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0"
                >
                  <Searchbar isDarkMode={isDarkMode} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex justify-between pb-4 items-center w-full pt-6">
            <div
              className={`smooth-transition font-bold text-2xl ${
                isDarkMode ? "text-white/80" : "text-white"
              }`}
            >
              {expandedEntry ? expandedEntry.date : "Recent Journal"}
            </div>

            <AnimatePresence>
              {!expandedEntry && (
                <motion.div
                  key="filters"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-2"
                >
                  <ThemedButton
                    text={"All"}
                    icon={Sparkles}
                    isDarkMode={isDarkMode}
                    onClick={() => setFilter("all")}
                    active={filter === "all"}
                  />
                  <ThemedButton
                    text={"Happy"}
                    icon={Smile}
                    isDarkMode={isDarkMode}
                    onClick={() => setFilter("happy")}
                    active={filter === "happy"}
                  />
                  <ThemedButton
                    text={"Sad"}
                    icon={Frown}
                    isDarkMode={isDarkMode}
                    onClick={() => setFilter("sad")}
                    active={filter === "sad"}
                  />
                  <ThemedButton
                    text={"Reflective"}
                    icon={Brain}
                    isDarkMode={isDarkMode}
                    onClick={() => setFilter("reflective")}
                    active={filter === "reflective"}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className={`smooth-transition p-4 w-full h-[49rem] ring-2 ring-white/10 rounded-2xl shadow-lg overflow-y-auto space-y-4 ${
              isDarkMode ? "bg-custom-grey/75 backdrop-blur-lg" : "bg-white"
            }`}
          >
            {filteredEntries.map((entry, index) => {
              if (expandedEntry && expandedEntry !== entry) return null;

              return (
                <JournalLog
                  key={index}
                  {...entry}
                  isDarkMode={isDarkMode}
                  isExpanded={expandedEntry === entry}
                  onClick={() =>
                    expandedEntry === entry
                      ? setExpandedEntry(null)
                      : setExpandedEntry(entry)
                  }
                  onBack={() => setExpandedEntry(null)}
                />
              );
            })}
          </div>
        </div>
      </div>

      <MicButton onClick={() => console.log("Voice input clicked")} />
    </div>
  );
};

export default App;
