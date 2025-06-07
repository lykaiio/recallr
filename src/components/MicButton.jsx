import React from "react";
import { Mic } from "lucide-react";

const MicButton = ({ onClick }) => {
  return (
    <button
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-custom-rpurple hover:bg-custom-rpurple/90 text-white shadow-lg transition-all duration-300"
      onClick={onClick}
    >
      <Mic className="w-6 h-6" />
    </button>
  );
};

export default MicButton;
