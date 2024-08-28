import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
  return (
    <div className="flex items-center border rounded-xl w-52">
      <div className="flex items-center">
        <div className=" text-gray-500 h-8 w-8  left-3 top-1/2 transform -translate-y-1/2">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-light-counter-button pt-4 pl-2"
          />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="pl-2 pr-4 py-2  bg-transparent w-38"
        />
      </div>
    </div>
  );
};

export default SearchInput;
