import React from "react";
import VedioStream from "./VedioStream";
import ChatWindow from "./ChatWindow";

const LiveChat = () => {
  return (
    <div className="flex gap-3 m-5">
      <VedioStream />
      <ChatWindow />
      <h1>Sai</h1>
    </div>
  );
};

export default LiveChat;
