"use client";

import React from "react";

const SearchBar = () => {
  return (
    <div className="flex gap-3 bg-slate-100 p-2 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search.."
        className="bg-transparent outline-none w-full"
        onKeyDown={(e) => e.key == "Enter" && console.log(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
