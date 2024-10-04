import React from "react";

export const Cards = ({ picture, name, position, college }) => {
  return (
    <div className="bg-[#f1f1f1] lg:w-[500px] lg:flex lg:flex-row lg:justify-start lg:items-center lg:h-[170px] lg:p-2 w-[181px] h-[325px] flex flex-col justify-center items-center space-y-2 p-4 md:w-[363px] md:h-[285px] md:justify-center md:items-center cursor-pointer">
      <img src={picture} alt="img" className="w-[100px] h-[115px] lg:mr-5" />
      <div className="flex flex-col items-center lg:w-[320px] lg:items-start lg:justify-start space-y-2 lg:space-y-4">
        <h2 className="lg:text-left lg:text-2xl lg:font-medium text-center text-lg text-[#515151]">
          {name}
        </h2>
        <h3 className="lg:text-left lg:text-base text-center text-sm text-[#515151]">
          {position}
        </h3>
        <span className="w-full block text-center relative">
          <div className="absolute top-0 left-0 w-full border-t-2 border-black opacity-15"></div>
          <p className="relative text-[#116f8f] text-center text-xs m-2 z-10 lg:text-left lg:text-sm lg:my-2 lg:mx-0">
            {college}
          </p>
        </span>
      </div>
    </div>
  );
};
