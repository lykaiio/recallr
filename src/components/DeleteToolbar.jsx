import React from "react";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

const DeleteToolbar = ({ isDarkMode, selectedEntryIds, onDelete }) => {
  return (
    <motion.div
      key="trash-wrapper"
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.2 }}
      className="p-3 space-y-2"
    >
      <div className="flex justify-end pr-1 pb-1">
        <button
          className={`smooth-transition ${
            isDarkMode ? "text-white hover:text-purple-400" : "text-black"
          }`}
          onClick={onDelete}
        >
          <Trash2 className="w-6 h-6" />
        </button>
      </div>
      <div
        className={`h-px w-full ${isDarkMode ? "bg-white/10" : "bg-black/10"}`}
      />
    </motion.div>
  );
};

export default DeleteToolbar;
