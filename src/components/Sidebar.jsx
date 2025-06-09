import React, { useState } from "react";
import {
  Home,
  Notebook,
  BarChart3,
  Settings,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SecondaryButton from "../components/SecondaryButton";

const Sidebar = ({ isDarkMode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={`smooth-transition h-full flex flex-col justify-between ${
        collapsed ? "w-[6rem]" : "w-[30rem]"
      } ${
        isDarkMode
          ? "bg-custom-grey/75 ring-2 ring-white/15 backdrop-blur-lg"
          : "bg-white"
      }`}
    >
      <div className="flex flex-col p-5 gap-y-6">
        <div
          className={`smooth-transition font-bold ${
            isDarkMode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-custom-rpurple to-blue-900"
              : "text-white"
          } ${collapsed ? "text-xl text-center" : "text-4xl"}`}
        >
          {collapsed ? "R" : "Recallr"}
        </div>

        <div className="flex flex-col items-center gap-y-4 mt-4">
          <button
            className={`smooth-transition overflow-hidden w-full p-2 rounded-2xl font-bold hover:shadow-md flex items-center justify-center ${
              isDarkMode
                ? "bg-custom-rpurple text-white hover:bg-custom-rpurple/80"
                : "bg-white text-black hover:bg-purple-100 hover:text-purple-900"
            }`}
          >
            {collapsed ? <Plus className="w-5 h-5" /> : "Add Journal"}
          </button>
        </div>

        <div className="flex flex-col gap-y-4 mt-6">
          <SecondaryButton
            text="Home"
            icon={Home}
            isDarkMode={isDarkMode}
            collapsed={collapsed}
          />
          <SecondaryButton
            text="Journal"
            icon={Notebook}
            isDarkMode={isDarkMode}
            collapsed={collapsed}
          />
          <SecondaryButton
            text="Insights"
            icon={BarChart3}
            isDarkMode={isDarkMode}
            collapsed={collapsed}
          />
        </div>
      </div>

      <div className="p-5 flex flex-col gap-y-4 items-center">
        <div
          className={`h-px w-full ${
            isDarkMode ? "bg-white/10" : "bg-black/10"
          }`}
        />

        <SecondaryButton
          text="Settings"
          icon={Settings}
          isDarkMode={isDarkMode}
          collapsed={collapsed}
        />

        <button
          onClick={toggleCollapsed}
          className={`smooth-transition mt-2 p-2 rounded-full ${
            collapsed ? "self-center" : "self-end"
          } ${
            isDarkMode
              ? "bg-white/10 text-white hover:bg-white/20"
              : "bg-black/10 text-black hover:bg-black/20"
          }`}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
