import React from "react";
import ReactDOM from "react-dom/client";
import SarufiChatbox, { MediaPreview } from "../../src/";

ReactDOM.createRoot(
  document.getElementById("sarufi-chatbox") as HTMLElement
).render(
  <React.StrictMode>
    {/* @ts-ignore */}
    <SarufiChatbox botId={window?.botId ?? 16} />
  </React.StrictMode>
);
