import React, { useState } from "react";

const Search = ({ searchInput }) => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Notes");

  const options = [
    { name: "All", icon: "ri-apps-line" },
    { name: "Notes", icon: "ri-file-text-line" },
    { name: "Home", icon: "ri-home-line" },
    { name: "Test", icon: "ri-file-list-3-line" },
    { name: "Question Bank", icon: "ri-questionnaire-line" },
    { name: "Bookmark", icon: "ri-bookmark-line" },
  ];

  return (
    <div className="flex flex-col justify-center w-full mx-auto gap-10">
      <div className="h-[10vh] rounded-lg bg-white flex items-center relative">
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="w-[93%] border-none outline-none p-5 text-xl text-zinc-600"
          type="text"
          placeholder={searchInput || "search"}
        />

        {/* Divider Line */}
        <div className="h-full  w-[1px] bg-zinc-800/50 mx-3"></div>

        {/* Dropdown Toggle */}
        <div className="relative mr-5 w-[15%]">
          <div
            className=" flex items-center gap-2 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <i
              className={` text-zinc-400 text-base ${
                options.find((opt) => opt.name === selectedOption).icon
              }`}
            ></i>
            <span className="text-zinc-800/50 text-base font-normal font-['Open_Sans'] ">
              {selectedOption}
            </span>
            <i className="ri-arrow-down-s-line text-zinc-400"></i>
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
              {options.map((option) => (
                <div
                  key={option.name}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedOption(option.name);
                    setShowDropdown(false);
                  }}
                >
                  <i className={`${option.icon} text-zinc-800 text-base`}></i>
                  <span className="text-zinc-800 text-base">{option.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {query.length > 0 && (
          <i
            onClick={() => setQuery("")}
            className="text-zinc-400 text-3xl ri-close-line right-0 cursor-pointer"
          ></i>
        )}
      </div>
    </div>
  );
};

export default Search;
