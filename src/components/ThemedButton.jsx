import React from "react";

const ThemedButton = ({ text, icon: Icon, onClick, isDarkMode }) => (
  <button
    onClick={onClick}
    className={`smooth-transition text-sm h-[3rem] px-5 rounded-2xl font-medium ring-1 ring-white/10 shadow-md flex items-center gap-2
      ${
        isDarkMode
          ? "bg-custom-grey text-white/80 hover:bg-purple-600 hover:text-white"
          : "bg-white text-black hover:bg-purple-200 hover:text-purple-900"
      }`}
  >
    {Icon && <Icon className="w-4 h-4" />}
    {text}
  </button>
);

export default ThemedButton;
