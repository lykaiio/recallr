import React from "react";
import { Smile, Frown, Brain, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemedCheckbox from "./ThemedCheckbox";

const moodIcons = {
  Happy: Smile,
  Sad: Frown,
  Reflective: Brain,
};

const JournalLog = ({
  date,
  time,
  mood = "Happy",
  text = "",
  isDarkMode = false,
  onClick,
  onBack,
  isExpanded = false,
  isSelectable = false,
  isSelected = false,
  onSelectToggle = () => {},
}) => {
  const Icon = moodIcons[mood] || Smile;

  const handleClick = (e) => {
    if (e.target.closest("button, input, label")) return;
    if (!isExpanded) {
      onClick?.(e);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative overflow-hidden text-left w-full ${
        isExpanded ? "h-[47rem]" : "min-h-[8rem]"
      } p-6 ring-1 ring-white/10 rounded-2xl shadow-lg transform transition-all duration-300 smooth-transition flex flex-col ${
        isDarkMode
          ? "bg-black/80 text-white/80 hover:ring-custom-rpurple"
          : "bg-white text-black hover:ring-custom-rpurple/50"
      } ${
        isExpanded
          ? "cursor-default overflow-auto"
          : isSelectable
          ? "cursor-default"
          : "cursor-pointer hover:scale-[1.015] overflow-hidden"
      }`}
    >
      <AnimatePresence>
        {isSelectable && isSelected && !isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100%" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-0 left-0 w-1 rounded-r-lg bg-purple-500 pointer-events-none shadow-[0_0_12px_2px_rgba(168,85,247,0.5)]"
          />
        )}
      </AnimatePresence>

      {isExpanded && (
        <button
          onClick={onBack}
          className={`mb-4 flex items-center gap-2 text-sm font-semibold ${
            isDarkMode
              ? "bg-white/10 hover:bg-white/20 text-white"
              : "bg-black/5 hover:bg-black/10 text-black"
          } px-4 py-2 rounded-lg w-fit`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      )}

      <div className="flex justify-between items-center text-sm font-medium w-full">
        <div className="flex items-center gap-3">
          {isSelectable && !isExpanded && (
            <ThemedCheckbox
              checked={isSelected}
              onChange={onSelectToggle}
              isDarkMode={isDarkMode}
            />
          )}
          <span>
            {date}
            {time && <span className="ml-2 opacity-60 text-xs">{time}</span>}
          </span>
        </div>
        {!isExpanded && <span>{mood}</span>}
      </div>

      <div className="flex items-start gap-3 mt-4 text-base leading-relaxed">
        <Icon className="w-5 h-5 mt-1 shrink-0" />
        <p
          className={`whitespace-pre-line ${
            isExpanded ? "" : "line-clamp-3 text-ellipsis overflow-hidden"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default JournalLog;
