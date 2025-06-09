import React from "react";

const ThemedCheckbox = ({ checked, onChange, isDarkMode }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onChange();
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer relative w-5 h-5 rounded-md ring-2 flex items-center justify-center
        ${
          isDarkMode
            ? checked
              ? "bg-purple-600 ring-purple-500"
              : "bg-black/60 ring-white/20 hover:ring-purple-500"
            : checked
            ? "bg-purple-500 ring-purple-500"
            : "bg-white ring-black/10 hover:ring-purple-300"
        } transition-all duration-200`}
    >
      <svg
        className={`w-3 h-3 text-white pointer-events-none ${
          checked ? "opacity-100" : "opacity-0"
        } transition-opacity`}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
};

export default ThemedCheckbox;
