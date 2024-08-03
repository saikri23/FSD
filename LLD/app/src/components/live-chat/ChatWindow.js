import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    const fetchId = setInterval(() => {
      fetchData();
    }, 3000);
    return () => clearInterval(fetchId);
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://hub.dummyapis.com/employee?noofRecords=1"
      );
      const messages = await data.json();
      setMessages((newMsgs) => {
        let msgList = [...messages, ...newMsgs];
        msgList = msgList.slice(0, 50);
        return msgList;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleClick = () => {
    setMessages((msg) => {
      let msgList = [
        {
          firstName: inputVal,
          email: "sai@gmail.com",
          imageUrl:
            "https://yt4.ggpht.com/ytc/AIdro_lMATeqMOu2FEhgSJSqllnFPMfB6uFvdUFCe23YJXVRxC4=s32-c-k-c0x00ffffff-no-rj",
        },
        ...msg,
      ];
      msgList = msgList.slice(0, 50);
      return msgList;
    });
  };

  return (
    <div className="w-[400px] h-[500px] border border-black overflow-y-scroll flex flex-col-reverse">
      <div className="m-2">
        <input
          type="text"
          className="w-[80%] border border-black"
          onChange={handleChange}
        />
        <button
          className="w-[15%] bg-blue-600 text-white m-1 border border-black rounded-md"
          onClick={handleClick}
        >
          Send
        </button>
      </div>
      {messages.map((message, idx) => (
        <ChatMessage key={idx} {...message} />
      ))}
    </div>
  );
};

export default ChatWindow;
