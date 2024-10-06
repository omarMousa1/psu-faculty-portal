import React from "react";

export const ProfilesID = () => {
  return (
    <form className="text-sm flex flex-col space-y-2 mt-6 lg:mt-10">
      <h2 className="text-2xl text-center font-normal my-4">PROFILES</h2>
      <div className="lg:grid lg:grid-cols-6 lg:place-content-center lg:place-items-stretch flex flex-col justify-center items-center md:flex-row md:justify-start md:items-center md:flex-wrap space-y-4 md:space-y-0 md:gap-4 ">
        <select className="w-full p-2 border border-[#ccc] rounded focus:ring-blue-500 opacity-60 md:w-[220px] md:h-[34px] lg:w-full">
          <option value="">ALL Colleges</option>
          <option value="business administration">
            Business Administration
          </option>
          <option value="law">Law</option>
          <option value="engineering">Engineering</option>
          <option value="computer and information sciences">
            Computer and Information Sciences
          </option>
          <option value="humanities & sciences">Humanities & Sciences</option>
          <option value="architecture & design">Architecture & Design</option>
        </select>

        <select
          className="w-full p-2 border border-[#ccc] rounded focus:ring-blue-500 opacity-60 bg-[#DCDCDC] cursor-not-allowed md:w-[345px] md:h-[34px] lg:w-full"
          disabled
        >
          <option value="" className="opacity-50 text-black">
            ALL Departments
          </option>
        </select>

        <input
          type="search"
          placeholder="Search"
          className="w-full p-2 border rounded md:w-[345px] md:h-[34px] lg:w-full col-span-2"
        />
        <button
          type="button"
          className="w-full h-9 bg-[#DCDCDC] rounded border-transparent md:w-[220px] md:h-[34px] lg:w-full text-lg"
        >
          Search
        </button>
        <button
          type="button"
          className="w-full h-9 bg-[#DCDCDC] rounded border-transparent md:w-[220px] md:h-[34px] lg:w-full text-lg"
        >
          Reset
        </button>
      </div>
    </form>
  );
};
