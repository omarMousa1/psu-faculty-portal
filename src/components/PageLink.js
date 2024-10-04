import React from "react";

export const PageLink = () => {
  return (
    <nav className="flex justify-center items-center mt-4 p-4">
      <ul className="flex items-center">
        <li>
          <a
            href="http://#"
            className="lg:px-1 lg:py-[1px] md:px-1 md:py-[1px] px-1 py-[2px] border rounded-l-md c flex items-center text-base text-[#777] border-[#ddd]"
          >
            Previous
          </a>
        </li>

        {[1, 2, 3, 4, 5, 6, 7].map((page) => (
          <li key={page}>
            <a
              href="http://#"
              className={`lg:px-3 lg:pb-[4px] lg:pt-[4px] md:px-3 md:pb-[4px] md:pt-[4px] px-3 pb-[5px] pt-[4px] border border-[#ddd] hover:bg-gray-200 ${
                page === 1
                  ? "bg-[#337ab7] text-white border-[#337ab7]"
                  : "bg-white text-[#337ab7]"
              }`}
            >
              {page}
            </a>
          </li>
        ))}

        <li>
          <a
            href="http://#"
            className="lg:px-1 lg:py-[1px] md:px-1 md:py-[1px] px-1 py-[2px] border rounded-r-md text- flex items-center text-[#337ab7] text-base border-[#ddd]"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
