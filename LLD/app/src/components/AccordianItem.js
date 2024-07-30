import React from "react";

const AccordianItem = ({ title, description, isOpen, setIsOpen }) => {
  return (
    <div className="border border-black">
      <div
        className="flex justify-between bg-slate-100 p-2"
        onClick={setIsOpen}
      >
        <span>{title}</span> <span>⬇️</span>
      </div>
      {isOpen && <p className="p-2">{description}</p>}
    </div>
  );
};

export default AccordianItem;
