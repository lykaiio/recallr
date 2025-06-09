import React from "react";

const ThemedButton = ({ text, icon: Icon, onClick, isDarkMode, active }) => (
  <button
    onClick={onClick}
    className={`smooth-transition text-sm h-[3rem] px-5 rounded-2xl font-medium ring-2 shadow-md flex items-center gap-2
      ${
        isDarkMode
          ? `bg-custom-grey text-white/80 ${
              active
                ? "ring-custom-rpurple ring-3"
                : "hover:bg-purple-600 hover:text-white ring-white/10"
            }`
          : `bg-white text-black ${
              active
                ? "ring-purple-500 ring-2"
                : "hover:bg-purple-200 hover:text-purple-900 ring-white/15"
            }`
      }`}
  >
    {Icon && <Icon className="w-4 h-4" />}
    {text}
  </button>
);

export default ThemedButton;
