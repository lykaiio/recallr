import React from "react";
import { AnimatePresence } from "framer-motion";
import JournalLog from "./JournalLog";

const EntryList = ({
  entries,
  expandedEntry,
  setExpandedEntry,
  isDarkMode,
  selectedEntryIds,
  setSelectedEntryIds,
}) => {
  return (
    <AnimatePresence>
      {entries.map((entry) => {
        if (expandedEntry && expandedEntry.id !== entry.id) return null;

        return (
          <JournalLog
            key={entry.id}
            {...entry}
            isDarkMode={isDarkMode}
            isExpanded={expandedEntry?.id === entry.id}
            onClick={() =>
              expandedEntry?.id === entry.id
                ? setExpandedEntry(null)
                : setExpandedEntry(entry)
            }
            onBack={() => setExpandedEntry(null)}
            isSelectable
            isSelected={selectedEntryIds.includes(entry.id)}
            onSelectToggle={() => {
              setSelectedEntryIds((prev) =>
                prev.includes(entry.id)
                  ? prev.filter((id) => id !== entry.id)
                  : [...prev, entry.id]
              );
            }}
          />
        );
      })}
    </AnimatePresence>
  );
};

export default EntryList;
