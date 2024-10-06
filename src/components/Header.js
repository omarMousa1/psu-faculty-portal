import React from "react";

export const Header = () => {
  return (
    <header className="w-full bg-[#14406e]">
      <div className="flex justify-between items-center md:max-w-5xl lg:max-w-5xl px-5 md:px-20 md: lg:mx-auto py-6">
        <p className="text-white text-center sm:text-xl md:text-2xl lg:text-5xl">
          PSU <br className="sm:hidden" /> Faculty Portal
        </p>
        <img
          src="https://facultyportal.psu.edu.sa/assets/img/logo.png"
          alt="PSU"
          className="w-48 h-14 sm:w-60 sm:h-20 md:w-80 md:h-28 lg:w-[350px] lg:h-28"
        />
      </div>
    </header>
  );
};
