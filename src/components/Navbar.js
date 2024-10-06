import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center py-4 md:hidden">
        <p className="text-[#777] font-normal">Faculty Portal</p>
        <button
          type="button"
          className="w-11 h-9 flex flex-col justify-center space-y-1 items-center rounded bg-[#ddd]"
        >
          <span className="block w-[22px] h-[2px] rounded-sm bg-[#888]"></span>
          <span className="block w-[22px] h-[2px] bg-[#888]"></span>
          <span className="block w-[22px] h-[2px] bg-[#888]"></span>
        </button>
      </div>

      <div className="hidden md:flex md:items-center md:py-6 md:gap-x-2">
        <button
          type="button"
          className="bg-[#428bca] border-[#428bca] text-[26px] px-4 py-2 rounded text-white"
        >
          Home
        </button>
        <button
          type="button"
          className="bg-[#428bca] border-[#428bca] text-[26px] px-4 py-2 rounded text-white"
        >
          Faculty Profiles
        </button>
      </div>
    </nav>
  );
};
