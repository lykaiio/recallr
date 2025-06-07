import React from "react";
import { Search } from "lucide-react";

const Searchbar = ({ isDarkMode }) => {
  return (
    <div
      className={`smooth-transition flex items-center gap-2 w-[30rem] pr-4 p-3 rounded-2xl text-sm shadow-md ring-1 ring-white/10 ${
        isDarkMode
          ? "bg-custom-grey text-white placeholder-gray-250"
          : "bg-white text-black placeholder-gray-500"
      }`}
    >
      <Search className="w-4 h-4 opacity-60" />
      <input
        type="text"
        placeholder="Search journal..."
        className={`bg-transparent outline-none w-full ${
          isDarkMode
            ? "text-white placeholder-gray-250"
            : "text-black placeholder-gray-500"
        }`}
      />
    </div>
  );
};

export default React.memo(Searchbar);
