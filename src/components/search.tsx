import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/productsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };
  return (
    <div className="flex items-center border rounded-xl w-52">
      <div className="flex items-center">
        <div className=" text-gray-500 h-8 w-8  left-3 top-1/2 transform -translate-y-1/4">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-light-counter-button pt-4 pl-2"
          />
        </div>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
          className="pl-2 pr-4 py-2  bg-transparent w-38 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchInput;
