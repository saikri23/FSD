import React from "react";

const PaginationCard = ({
  title,
  id,
  thumbnail,
  price,
  discountPercentage,
}) => {
  return (
    <div className="w-[200px] border border-black m-5">
      <img src={thumbnail} alt="" className="w-[100%]" />
      <div className="h-20 text-xl">
        {id}.{title}
      </div>
      <div className="text-lg">$.{price}</div>
      <div className="text-md">
        Inclusive of discount {discountPercentage}%.
      </div>
    </div>
  );
};

export default PaginationCard;
