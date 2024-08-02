import React, { useEffect, useState } from "react";
import PaginationCard from "./PaginationCard";
import PaginationShimmer from "./PaginationShimmer";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [showShimmer, setShowShimmer] = useState(true);
  const LIMIT = 10;

  const fetchData = async () => {
    setShowShimmer(true);
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }`
    );
    const formattedData = await data.json();
    setShowShimmer(false);
    setProducts(formattedData.products);
    setNoOfPages(Math.ceil(formattedData.total / LIMIT));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return showShimmer ? (
    <PaginationShimmer />
  ) : (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <PaginationCard key={product.id} {...product} />
      ))}
      <div className="cursor-pointer">
        <span
          onClick={() => setCurrentPage((curr) => (curr > 0 ? curr - 1 : 0))}
        >
          PVS
        </span>
        {[...Array(noOfPages).keys()].map((pn) => (
          <span
            className={`p-2 ${pn === currentPage && "underline font-bold"}`}
            key={pn}
            onClick={() => setCurrentPage(pn)}
          >
            {pn + 1}
          </span>
        ))}
        <span
          onClick={() =>
            setCurrentPage((curr) => (curr >= noOfPages - 1 ? curr : curr + 1))
          }
        >
          NXT
        </span>
      </div>
    </div>
  );
};

export default Pagination;
