import React, { useEffect, useState } from "react";

const PaginationComponent = ({ limit, handleRange, totalProdLen }) => {
  const noOfPages = Math.ceil(totalProdLen / limit);
  const [curPage, setCurPage] = useState(0);
  useEffect(() => {
    const listStart = totalProdLen < limit ? 0 : curPage * limit;
    const listEnd = totalProdLen < limit ? totalProdLen : listStart + limit;
    handleRange(listStart, listEnd);
  }, [curPage, handleRange, limit, totalProdLen]);
  return (
    <div className="cursor-pointer">
      <span onClick={() => setCurPage((cur) => (cur > 0 ? cur - 1 : 0))}>
        PVS
      </span>
      {[...Array(noOfPages).keys()].map((pn) => (
        <span
          className={`p-2 ${pn === curPage && "underline font-bold"}`}
          onClick={() => setCurPage(pn)}
        >
          {pn + 1}
        </span>
      ))}
      <span
        onClick={() =>
          setCurPage((cur) => (cur > noOfPages - 1 ? cur : cur + 1))
        }
      >
        NXT
      </span>
    </div>
  );
};

export default PaginationComponent;
