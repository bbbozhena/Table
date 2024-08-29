"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import {
  setProducts,
  setItemsPerPage,
  setCurrentPage,
} from "../../redux/productsSlice";
import SearchInput from "@/components/search";
import Table from "@/components/table";
import ThemeToggleButton from "@/components/themeToggleButton";
import Pagination from "@/components/pagination";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/productsData.json");
      const data = await response.json();
      dispatch(setProducts(data));
    }

    fetchData();
  }, [dispatch]);

  const { itemsPerPage } = useSelector((state: RootState) => state.products);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setItemsPerPage(Number(e.target.value)));
    dispatch(setCurrentPage(1));
  };

  return (
    <div
      className={`pt-6 ${
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
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className={`border rounded-md p-2 w-12  mx-5  ${
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
          <button className="bg-button-color text-white rounded-md p-2 mr-4 font-bold">
            + Add Customers
          </button>
        </div>
      </div>
      <div className="mt-6">
        <Table darkMode={darkMode} />
      </div>
      <div className="flex justify-center mt-4">
        <Pagination />
      </div>
    </div>
  );
}
