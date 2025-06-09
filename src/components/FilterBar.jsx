import React from "react";
import { Sparkles, Smile, Frown, Brain } from "lucide-react";
import ThemedButton from "./ThemedButton";

const FilterBar = ({ filter, setFilter, isDarkMode }) => {
  const filters = [
    { label: "All", icon: Sparkles, value: "all" },
    { label: "Happy", icon: Smile, value: "happy" },
    { label: "Sad", icon: Frown, value: "sad" },
    { label: "Reflective", icon: Brain, value: "reflective" },
  ];

  return (
    <div className="flex gap-2">
      {filters.map(({ label, icon, value }) => (
        <ThemedButton
          key={value}
          text={label}
          icon={icon}
          isDarkMode={isDarkMode}
          onClick={() => setFilter(value)}
          active={filter === value}
        />
      ))}
    </div>
  );
};

export default FilterBar;
