import React from "react";

const PaginationShimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill(0)
        .map((n, i) => (
          <div
            key={i}
            className="w-[200px] h-[300px] border border-black m-5 bg-slate-400"
          >
            {/* <div className="w-64 h-64 bg-gray-200"></div> */}
          </div>
        ))}
    </div>
  );
};

export default PaginationShimmer;
