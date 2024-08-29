"use client";
import { useState } from "react";
import SearchInput from "@/components/search";
import Table from "@/components/table";
import ThemeToggleButton from "@/components/themeToggleButton";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`mt-6 ${
        darkMode ? "dark bg-dark-bg text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <p className="ml-5">Show</p>
          <div>
            <input
              type="number"
              min="1"
              max="10"
              step="1"
              defaultValue="10"
              className={`border rounded-md p-2 w-12 bg-light-counter-button mx-5 ${
                darkMode
                  ? "dark bg-dark-counter-button text-white border-none"
                  : "bg-light-counter-button text-black"
              }`}
            />
          </div>
          <p className="mr-5">entries</p>
          <SearchInput />
          <div className="flex items-center ml-4">
            <ThemeToggleButton
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </div>
        </div>
        <div>
          <button className="bg-button-color text-white rounded-md p-2 font-bold">
            + Add Customers
          </button>
        </div>
      </div>
      <div className="mt-6">
        <Table darkMode={darkMode} />
      </div>
    </div>
  );
}
