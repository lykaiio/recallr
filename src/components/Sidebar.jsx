import React from "react";
import { Home, Notebook, BarChart3 } from "lucide-react";
import SecondaryButton from "../components/SecondaryButton";

const Sidebar = ({ isDarkMode }) => {
  return (
    <div
      className={`smooth-transition w-[30rem] h-full ${
        isDarkMode
          ? "bg-custom-grey/75 ring-1 ring-white/10 backdrop-blur-lg"
          : "bg-white"
      }`}
    >
      <div className="flex h-full flex-col p-5 gap-y-6">
        <div
          className={`smooth-transition text-4xl font-bold ${
            isDarkMode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-custom-rpurple to-blue-900"
              : "text-white"
          }`}
        >
          Recallr
        </div>
        <div className="flex flex-col items-center gap-y-4 mt-4">
          <button
            className={`smooth-transition w-[15rem] p-2 rounded-2xl font-bold hover:shadow-md ${
              isDarkMode
                ? "bg-custom-rpurple text-white hover:bg-custom-rpurple/80"
                : "bg-white text-black hover:bg-purple-100 hover:text-purple-900"
            }`}
          >
            Add Journal
          </button>
        </div>

        <SecondaryButton text="Home" icon={Home} isDarkMode={isDarkMode} />
        <SecondaryButton
          text="Journal"
          icon={Notebook}
          isDarkMode={isDarkMode}
        />
        <SecondaryButton
          text="Insights"
          icon={BarChart3}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
