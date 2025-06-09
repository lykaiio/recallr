import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import MicButton from "./components/MicButton";

import FilterBar from "./components/FilterBar";
import EntryList from "./components/EntryList";
import DeleteToolbar from "./components/DeleteToolbar";

import journalEntries from "./data/journalEntries";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [expandedEntry, setExpandedEntry] = useState(null);
  const [filter, setFilter] = useState("all");
  const [selectedEntryIds, setSelectedEntryIds] = useState([]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const filteredEntries = journalEntries.filter((entry) => {
    if (filter === "all") return true;
    return entry.mood?.toLowerCase() === filter;
  });

  return (
    <div
      className={`smooth-transition relative h-screen w-full flex flex-col justify-between overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-t from-custom-greypurple to-black/98"
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
                isDarkMode ? "text-white/80" : "text-black"
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
                >
                  <FilterBar
                    filter={filter}
                    setFilter={setFilter}
                    isDarkMode={isDarkMode}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className={`smooth-transition p-4 w-full h-[49rem] ring-2 ring-white/15 rounded-2xl shadow-lg overflow-y-auto space-y-4 ${
              isDarkMode ? "bg-custom-grey/70 backdrop-blur-lg" : "bg-white"
            }`}
          >
            {!expandedEntry && (
              <DeleteToolbar
                isDarkMode={isDarkMode}
                selectedEntryIds={selectedEntryIds}
                onDelete={() =>
                  console.log("Delete selected:", selectedEntryIds)
                }
              />
            )}

            <EntryList
              entries={filteredEntries}
              expandedEntry={expandedEntry}
              setExpandedEntry={setExpandedEntry}
              isDarkMode={isDarkMode}
              selectedEntryIds={selectedEntryIds}
              setSelectedEntryIds={setSelectedEntryIds}
            />
          </div>
        </div>
      </div>

      <MicButton onClick={() => console.log("Voice input clicked")} />
    </div>
  );
};

export default App;
