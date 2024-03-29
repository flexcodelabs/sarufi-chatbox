import React, { CSSProperties } from "react";
import ReactDOM from "react-dom/client";
import SarufiChatbox from "../../src/";
// import "./style.css";

ReactDOM.createRoot(
  document.getElementById("sarufi-chatbox") as HTMLElement
).render(
  <React.StrictMode>
    {/* @ts-ignore */}
    <SarufiChatbox botId={window?.botId ?? 16} />
  </React.StrictMode>
);
