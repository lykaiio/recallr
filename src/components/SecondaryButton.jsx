import React from "react";

const SecondaryButton = ({ text, icon: Icon, isDarkMode, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`smooth-transition w-[8rem] p-2 font-bold flex items-center justify-center gap-2 rounded-xl
        ${
          isDarkMode
            ? "text-white bg-custom-grey/40 hover:text-purple-400"
            : "text-black bg-white hover:text-purple-600"
        }
      `}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {text}
    </button>
  );
};

export default SecondaryButton;
