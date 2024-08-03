import React, { useEffect, useState } from "react";

const SearchUi = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cache, setCache] = useState({});

  const fetchSearchData = async () => {
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
    } else {
      const data = await fetch(
        "https://www.google.com/complete/search?client=firefox&q=" + searchText
      );
      const searchData = await data.json();
      cache[searchText] = searchData[1];
      setSearchResults(searchData[1]);
    }
  };

  useEffect(() => {
    const ref = setTimeout(() => {
      fetchSearchData();
    }, 200);
    return () => clearTimeout(ref);
  }, [searchText]);

  return (
    <div>
      <div>
        <input
          type="text"
          className="border border-black m-3 w-[20%] mb-0 p-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {searchText && (
        <ul className="border border-black m-3 mt-0 p-2 w-[20%]">
          {searchResults.map((text) => (
            <li key={text} className="hover:bg-gray-300 cursor-pointer">
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchUi;
