import React from "react";

export const MemeCard = ({ data }) => {
  const { url, title, author } = data;
  return (
    <div className="p-5 m-5 border border-black rounded-lg">
      <h1>{title}</h1>
      <img src={url} className="w-64 h-64" alt="new img" />
      <h2>{author}</h2>
    </div>
  );
};
