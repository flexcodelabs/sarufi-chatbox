import React from "react";

const ChatLoader = ({ fromPlay }: { fromPlay?: boolean }) => {
  return (
    <div className={"sarufi-chat-loader"}>
      <div className={"sarufi-bounce1"}></div>
      <div className={"sarufi-bounce2"}></div>
      {!fromPlay && <div className={"sarufi-bounce3"}></div>}
    </div>
  );
};

export default ChatLoader;
