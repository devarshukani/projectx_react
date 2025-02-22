import React, { useState } from 'react'

const Search = ({searchInput}) => {
    
  const [query, setQuery] = useState("");
  return (
    <div className="mt-5 w-full flex flex-col justify-center items-center gap-10">
        <div className="w-[82%] h-[10vh] rounded-lg bg-white">
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
          className="w-[93%] border-none outline-none  p-5 text-xl  text-zinc-600"
          type="text"
          placeholder={searchInput||"search"}
        />
        <i className="text-zinc-400 ml-2 text-3xl ri-search-line"></i>
        {query.length > 0 && (
          <i
            onClick={() => setQuery("")}
            className=" text-zinc-400 text-3xl ri-close-line right-0"
          ></i>
        )}
      </div>
    </div>
  )
}

export default Search