import React from "react";
import ReactDOM from "react-dom/client";
import SarufiChatbox from "../../src/";

ReactDOM.createRoot(
  document.getElementById("sarufi-chatbox") as HTMLElement
).render(
  <React.StrictMode>
    <SarufiChatbox botId={16} />
  </React.StrictMode>
);
