import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="w-1/2 h-8 mb-5">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
      <input
        type="text"
        placeholder="Search for Movies or Tv series"
        className="pl-3 focus:outline-none text-xs bg-[#0f141e] text-white"
      />
    </div>
  );
};

export default Search;
