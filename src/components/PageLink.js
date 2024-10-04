import React from "react";

export const PageLink = () => {
  return (
    <nav className="flex justify-center items-center mt-4 p-4">
      <ul className="flex items-center">
        <li>
          <a
            href="http://#"
            className="lg:px-3 lg:py-[8px] md:px-3 md:py-[8px] px-2 py-[8px] border rounded-l-md text-base text-[#777] border-[#ddd]"
          >
            Previous
          </a>
        </li>

        {[1, 2, 3, 4, 5, 6, 7].map((page) => (
          <li key={page}>
            <a
              href="http://#"
              className={`lg:px-3 lg:py-[8px] md:px-3 md:py-[8px] px-2 py-[8px] border border-[#ddd] hover:bg-gray-200 ${
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
            className="lg:px-3 lg:py-[8px] md:px-3 md:py-[8px] px-2 py-[8px] border rounded-r-md text-[#337ab7] text-base border-[#ddd]"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
