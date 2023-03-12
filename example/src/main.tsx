import React from "react";
import ReactDOM from "react-dom/client";
import SarufiChatbox, { MediaPreview } from "../../src/";

ReactDOM.createRoot(
  document.getElementById("sarufi-chatbox") as HTMLElement
).render(
  <React.StrictMode>
    <div>
      <h1>My Beautiful Website</h1>
    </div>
    <SarufiChatbox botId={16} />
  </React.StrictMode>
);
