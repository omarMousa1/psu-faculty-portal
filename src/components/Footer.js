import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full h-[200px] bg-[#14406e] px-4">
      <div className="flex justify-between items-center max-w-5xl lg:px-0 mx-auto h-full">
        <p className="text-white text-center md:font-light lg:text-xl">
          Counter: 2862543
        </p>
        <p className="text-white text-center md:font-light lg:text-xl">
          Copyright © Prince Sultan University 2024
        </p>
        <p className="text-white text-center md:font-light lg:text-xl">
          Support & Contact Us
        </p>
      </div>
    </footer>
  );
};
