import React from "react";
import { Smile, Frown, Brain, ArrowLeft } from "lucide-react";

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
}) => {
  const Icon = moodIcons[mood] || Smile;

  return (
    <div
      onClick={!isExpanded ? onClick : undefined}
      className={`text-left w-full ${
        isExpanded ? "h-[47rem]" : "min-h-[8rem]"
      } p-6 ring-1 ring-white/10 rounded-2xl shadow-lg transform transition-all duration-300 smooth-transition flex flex-col ${
        isDarkMode
          ? "bg-black/80 text-white/80 hover:ring-custom-rpurple"
          : "bg-white text-black hover:ring-custom-rpurple/50"
      } ${
        isExpanded
          ? "cursor-default overflow-auto"
          : "cursor-pointer hover:scale-[1.015] overflow-hidden"
      }`}
    >
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

      <div className="flex justify-between items-center text-sm font-medium">
        <span>
          {date}
          {time && <span className="ml-2 opacity-60 text-xs">{time}</span>}
        </span>
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
