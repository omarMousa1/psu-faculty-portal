import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-[#14406e]">
      <p className="text-white text-center sm:text-xl md:text-2xl lg:text-4xl">
        PSU <br className="sm:hidden" /> Faculty Portal
      </p>
      <img
        src="https://facultyportal.psu.edu.sa/assets/img/logo.png"
        alt="PSU"
        className="w-48 h-14 sm:w-60 sm:h-20 md:w-80 md:h-28 lg:w-80 lg:h-28"
      />
    </header>
  );
};
