import React from "react";

const Sidebar = ({ isDarkMode }) => {
  return (
    <div
      className={`smooth-transition w-[30rem] h-full ${
        isDarkMode
          ? "bg-custom-grey/75 ring-1 ring-white/10 backdrop-blur-lg"
          : "bg-white"
      }`}
    >
      <div className="flex flex-1 h-full flex-col p-5 gap-y-4">
        <div
          className={`smooth-transition text-4xl font-bold ${
            isDarkMode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-custom-rpurple to-blue-900"
              : "text-white"
          }`}
        >
          Recallr
        </div>
        <button
          className={`smooth-transition w-full p-2 rounded-2xl font-bold ${
            isDarkMode ? "bg-custom-rpurple/55 text-white" : "bg-white"
          }`}
        >
          Add Journal
        </button>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
