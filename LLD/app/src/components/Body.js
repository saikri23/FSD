import React, { useEffect, useState } from "react";
import { MemeCard } from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState(null);
  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    console.log(json);
    setMemes(json.memes);
    console.log(memes);
  };

  return (
    <div className="flex flex-wrap">
      {memes ? (
        memes.map((meme, i) => (
          <div key={i}>
            <MemeCard data={meme} />
          </div>
        ))
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
