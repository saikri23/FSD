import React, { useEffect, useState } from "react";
import PaginationCard from "../pagination/PaginationCard";
import PaginationComponent from "./PaginationComponent";

const FePagination = () => {
  const [products, setProducts] = useState([]);
  const [startIdx, setStartIdx] = useState(0);
  const [lastIdx, setLastIdx] = useState(10);
  const LIMIT = 10;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch(
      "https://dummyjson.com/products?limit=194&&skip=0"
    );
    const productData = await data.json();
    setProducts(productData.products);
    // console.log(products);
  };

  const handleRange = (start, end) => {
    setStartIdx(start);
    setLastIdx(end);
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {products.slice(startIdx, lastIdx).map((product) => (
          <PaginationCard key={product.id} {...product} />
        ))}
      </div>

      <PaginationComponent
        handleRange={handleRange}
        limit={LIMIT}
        totalProdLen={products.length}
      />
    </div>
  );
};

export default FePagination;
