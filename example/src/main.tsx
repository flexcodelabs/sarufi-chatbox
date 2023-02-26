import React from "react";
import ReactDOM from "react-dom/client";
import SarufiChatbox from "../../src/";

ReactDOM.createRoot(
  document.getElementById("sarufi-chatbox") as HTMLElement
).render(
  <React.StrictMode>
    <SarufiChatbox
      botId={16}
      theme={{
        buttonSize: "md",
        primaryColor: "blue",
        borderColor: "lightgray",
        fontSize: "14",
        fontFamily: "PoppinsRegular",
        sentBoxBg: "blue",
        receivedBoxBg: "white",
        sentBoxColor: "white",
        receivedBoxColor: "black",
        chatboxBg: "#EDECE1",
        receivedBoxLinkColor: "blue",
        sentBoxLinkColor: "white",
      }}
    />
  </React.StrictMode>
);
