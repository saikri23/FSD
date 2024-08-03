import React from "react";

const ChatMessage = ({ firstName, email, imageUrl }) => {
  return (
    <div className="flex m-2">
      <img src={imageUrl} alt="" className="px-2 rounded-full w-10 h-5" />
      <div>
        <div className="text-sm font-bold">{firstName}</div>
        <div className="text-sm">{email}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
