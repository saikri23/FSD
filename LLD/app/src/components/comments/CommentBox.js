import React from "react";

const CommentBox = ({ data }) => {
  return data.map((item, idx) => (
    <div key={idx} className="p-8 border-l-2 border-black">
      <div className="flex items-center">
        <div>
          <img
            className="w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/112272982?v=4&size=64"
            alt="user pic"
          />
        </div>
        <div className="font-bold">{item.name}</div>
      </div>
      <div className="px-10">
        <p>{item.disc}</p>
      </div>
      {item?.replies && <CommentBox data={item.replies} />}
    </div>
  ));
};

export default CommentBox;
