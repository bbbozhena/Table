// components/ThemeToggleButton.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

type ThemeToggleButtonProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`flex items-center justify-center h-10 w-10 rounded-full ${
        darkMode ? "bg-gray-700" : "bg-yellow-300"
      } text-white`}
    >
      <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
    </button>
  );
};

export default ThemeToggleButton;
