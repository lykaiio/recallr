import React from "react";

const Searchbar = ({ isDarkMode }) => {
  return (
    <input
      type="text"
      placeholder="Search journal..."
      className={`smooth-transition w-[25rem] pr-4 p-3 rounded-2xl text-sm shadow-md ring-1 ring-white/10 ${
        isDarkMode
          ? "bg-custom-grey text-white placeholder-gray-250"
          : "bg-white text-black placeholder-gray-500"
      }`}
    />
  );
};

export default React.memo(Searchbar);
