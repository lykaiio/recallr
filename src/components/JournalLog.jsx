import React from "react";
import { Smile, Frown, Brain } from "lucide-react";

const moodIcons = {
  Happy: Smile,
  Sad: Frown,
  Reflective: Brain,
};

const JournalLog = ({
  date,
  mood = "Happy",
  text = "",
  isDarkMode = false,
  onClick,
}) => {
  const Icon = moodIcons[mood] || Smile;

  return (
    <button
      onClick={onClick}
      className={`text-left w-full p-4 ring-1 ring-white/10 min-h-[8rem] rounded-2xl shadow-lg flex flex-col gap-2 cursor-pointer transform transition-all duration-300 smooth-transition ${
        isDarkMode
          ? "bg-black/80 text-white/80 hover:ring-custom-rpurple hover:scale-[1.015]"
          : "bg-white text-black hover:ring-custom-rpurple/50 hover:scale-[1.015]"
      }`}
    >
      <div className="flex justify-between items-center text-sm font-medium">
        <span>{date}</span>
        <span>{mood}</span>
      </div>

      <div className="flex items-start gap-3 mt-2 text-base leading-relaxed">
        <Icon className="w-5 h-5 mt-1 shrink-0" />
        <p className="whitespace-pre-line">{text}</p>
      </div>
    </button>
  );
};

export default JournalLog;
