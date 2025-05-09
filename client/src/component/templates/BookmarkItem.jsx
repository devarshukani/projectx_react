import React from "react";

const BookmarkItem = ({ name, count, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`group relative transition-all duration-300 ease-in-out w-[90%] py-2 rounded-lg cursor-pointer ${
        isActive
          ? "pl-4 w-[100%] bg-[#dde7f9]"
          : "hover:pl-4 hover:w-[100%] hover:bg-[#dde7f9]"
      }`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-1 bg-[#235391] rounded-full transition-all duration-300 ease-in-out ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      ></div>

      <div>
        <h1 className="text-lg font-semibold">{name}</h1>
        {count && (
          <p className="text-zinc-500 text-sm mt-1">{count} bookmarks</p>
        )}
      </div>
    </div>
  );
};

export default BookmarkItem;
