import React from "react";

const SecondaryButton = ({
  text,
  icon: Icon,
  isDarkMode,
  collapsed,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`smooth-transition w-full p-2 font-bold flex items-center ${
        collapsed ? "justify-center" : "justify-start pl-6"
      } gap-2 rounded-xl
        ${
          isDarkMode
            ? "text-white hover:text-purple-400"
            : "text-black bg-white hover:text-purple-600"
        }
      `}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {!collapsed && text}
    </button>
  );
};

export default SecondaryButton;
