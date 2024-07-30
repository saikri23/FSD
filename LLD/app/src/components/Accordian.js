import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const Accordian = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const data = [
    {
      title: "Title-1",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point ofusing Lorem Ipsum is that it has a more-or-less normal distribution ofletters, as opposed to using 'Content here, content here', making itlook like readable English. Many desktop publishing packages and webpage editors now use Lorem Ipsum as their default model text, and asearch for 'lorem ipsum' will uncover many web sites still in theirinfancy. Various versions have evolved over the years, sometimes byaccident, sometimes on purpose (injected humour and the like).",
    },
    {
      title: "Title-2",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point ofusing Lorem Ipsum is that it has a more-or-less normal distribution ofletters, as opposed to using 'Content here, content here', making itlook like readable English. Many desktop publishing packages and webpage editors now use Lorem Ipsum as their default model text, and asearch for 'lorem ipsum' will uncover many web sites still in theirinfancy. Various versions have evolved over the years, sometimes byaccident, sometimes on purpose (injected humour and the like).",
    },
    {
      title: "Title-3",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point ofusing Lorem Ipsum is that it has a more-or-less normal distribution ofletters, as opposed to using 'Content here, content here', making itlook like readable English. Many desktop publishing packages and webpage editors now use Lorem Ipsum as their default model text, and asearch for 'lorem ipsum' will uncover many web sites still in theirinfancy. Various versions have evolved over the years, sometimes byaccident, sometimes on purpose (injected humour and the like).",
    },
  ];
  return (
    <div className="w-[50%] m-auto">
      {data.map((item, Idx) => (
        <AccordianItem
          key={Idx}
          title={item.title}
          description={item.description}
          isOpen={openIdx === Idx}
          setIsOpen={() =>
            openIdx === Idx ? setOpenIdx(null) : setOpenIdx(Idx)
          }
        />
      ))}
    </div>
  );
};

export default Accordian;
