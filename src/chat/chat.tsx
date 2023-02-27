import React from "react";
import { CSSProperties, useState } from "react";
import { Close, TextComponent } from "../assets/icons";
import styles from "./chat.module.css";
import Chatbox from "./chatbox";

export type SarufiChatboxType = {
  botId: string | number;
  API_URL?: string;
  title?: string;
  theme?: {
    buttonSize?: "sm" | "md" | "lg";
    primaryColor?: string;
    fontSize?: string | number;
    fontFamily?: "PoppinsRegular" | "InterRegular" | "inherit";
    borderColor?: string;
    sentBoxBg?: string;
    receivedBoxBg?: string;
    sentBoxColor?: string;
    receivedBoxColor?: string;
    chatboxBg?: string;
    receivedBoxLinkColor?: string;
    sentBoxLinkColor?: string;
    mode?: "light" | "dark";
    placement?: "left" | "right";
  };
};

const Chat = ({ botId, API_URL, theme, title = "Chat" }: SarufiChatboxType) => {
  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<number | string>(new Date().valueOf());

  // set up styles
  const style = {
    "--sarufi-primary-color":
      // @ts-ignore
      window?.style?.mode === "dark" || theme?.mode === "dark"
        ? "#202C33"
        : // @ts-ignore
          window.style?.primaryColor ?? theme?.primaryColor ?? "#2776EA",

    "--sarufi-font-size":
      // @ts-ignore
      `${window.style?.fontSize ?? theme?.fontSize ?? 14}px`,

    "--sarufi-font-family":
      // @ts-ignore
      window.style?.fontFamily === "PoppinsRegular"
        ? "'Poppins', sans-serif"
        : // @ts-ignore
        window.style?.fontFamily === "InterRegular"
        ? "'Inter', sans-serif"
        : theme?.fontFamily === "InterRegular"
        ? "'Inter', sans-serif"
        : theme?.fontFamily === "PoppinsRegular"
        ? "'Poppins', sans-serif"
        : // @ts-ignore
        window.style?.fontFamily === "inherit" ||
          theme?.fontFamily === "inherit"
        ? "inherit"
        : "'Inter', sans-serif",

    "--sarufi-border-color":
      // @ts-ignore
      window.style?.borderColor ?? theme?.borderColor ?? "lightgray",

    "--sarufi-sent-box-bg":
      // @ts-ignore
      window?.style?.mode === "dark" || theme?.mode === "dark"
        ? "#005C4B"
        : // @ts-ignore
          window.style?.sentBoxBg ?? theme?.sentBoxBg ?? "#D8F9D4",

    "--sarufi-received-box-bg":
      // @ts-ignore
      window?.style?.mode === "dark" || theme?.mode === "dark"
        ? "#202C33"
        : // @ts-ignore
          window.style?.receivedBoxBg ?? theme?.receivedBoxBg ?? "white",

    "--sarufi-sent-box-color":
      // @ts-ignore
      window?.style?.mode === "dark" || theme?.mode === "dark"
        ? "white"
        : // @ts-ignore
          window.style?.sentBoxColor ?? theme?.sentBoxColor ?? "black",

    "--sarufi-received-box-color":
      // @ts-ignore
      window?.style?.mode === "dark" || theme?.mode === "dark"
        ? "white"
        : // @ts-ignore
          window.style?.receivedBoxColor ?? theme?.receivedBoxColor ?? "black",

    "--sarufi-sent-box-link-color":
      // @ts-ignore
      window?.style?.mode === "dark" || theme?.mode === "dark"
        ? "#53BDEB"
        : // @ts-ignore
          window.style?.sentBoxLinkColor ?? theme?.sentBoxLinkColor ?? "black",

    "--sarufi-received-box-link-color":
      // @ts-ignore
      window?.style?.mode === "dark" || theme?.mode === "dark"
        ? "#53BDEB"
        : // @ts-ignore
          window.style?.receivedBoxLinkColor ??
          theme?.receivedBoxLinkColor ??
          "black",

    "--sarufi-chatbox-bg":
      // @ts-ignore
      window?.style?.mode === "dark" || theme?.mode === "dark"
        ? "#0B141A"
        : // @ts-ignore
          window.style?.chatboxBg ?? theme?.chatboxBg ?? "#EDECE1",
  } as CSSProperties;

  return (
    <div
      className={`${styles["sarufi-chat-container"]} ${
        // @ts-ignore
        window?.style?.placement === "left" || theme?.placement === "left"
          ? styles["sarufi-left-align"]
          : styles["sarufi-right-align"]
      } ${open ? styles.open : ""}
      ${open ? "sarufi-shadow-xl" : "sarufi-flex-center"}`}
      style={{
        position: "fixed",
        fontFamily:
          // @ts-ignore
          window.style?.fontFamily === "PoppinsRegular"
            ? "'Poppins', sans-serif"
            : // @ts-ignore
            window.style?.fontFamily === "InterRegular"
            ? "'Inter', sans-serif"
            : theme?.fontFamily === "InterRegular"
            ? "'Inter', sans-serif"
            : theme?.fontFamily === "PoppinsRegular"
            ? "'Poppins', sans-serif"
            : // @ts-ignore
            window.style?.fontFamily === "inherit" ||
              theme?.fontFamily === "inherit"
            ? "inherit"
            : "'Inter', sans-serif",
        ...(!open
          ? {
              height:
                // @ts-ignore
                window.style?.buttonSize === "lg" || theme?.buttonSize === "lg"
                  ? "70px"
                  : "50px",
              width:
                // @ts-ignore
                window.style?.buttonSize === "lg" || theme?.buttonSize === "lg"
                  ? "70px"
                  : "50px",
            }
          : {}),
        ...style,
      }}
    >
      {!open && (
        <button
          className="sarufi-shadow-xl"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            cursor: "pointer",
            borderRadius: "50%",
            height:
              // @ts-ignore
              window.style?.buttonSize === "lg" || theme?.buttonSize === "lg"
                ? "70px"
                : // @ts-ignore
                window.style?.buttonSize === "sm" || theme?.buttonSize === "sm"
                ? "30px"
                : "50px",
            width:
              // @ts-ignore
              window.style?.buttonSize === "lg" || theme?.buttonSize === "lg"
                ? "70px"
                : // @ts-ignore
                window.style?.buttonSize === "sm" || theme?.buttonSize === "sm"
                ? "30px"
                : "50px",
            background:
              // @ts-ignore
              window?.style?.primaryColor ?? theme?.primaryColor ?? "#2776EA",
            color: "white",
            border: "none",
          }}
          onClick={() => setOpen(true)}
        >
          <TextComponent
            size={
              // @ts-ignore
              window.style?.buttonSize === "sm" || theme?.buttonSize === "sm"
                ? 20
                : 30
            }
          />
        </button>
      )}
      {open && (
        <div
          style={{
            height: "100%",
            borderRadius: ".5rem",
            overflow: "hidden",
          }}
        >
          <div
            className="sarufi-flex-wide text-neutral-0"
            style={{
              height: "42px",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              background: "var(--sarufi-primary-color)",
              color: "white",
            }}
          >
            <p
              className="sarufi-ellipsed-text"
              style={{
                fontWeight: 600,
                fontFamily: "var(--sarufi-font-family)",
                // @ts-ignore
                fontSize: window.style?.fontSize
                  ? // @ts-ignore
                    window.style?.fontSize * 1.1
                  : theme?.fontSize
                  ? Number(theme?.fontSize) * 1.1
                  : "1.1em",
              }}
            >
              {/* @ts-ignore */}
              {window?.botTitle ?? title}
            </p>
            <button
              className="flex-center"
              onClick={() => {
                setOpen(false);
                setId(new Date().valueOf());
              }}
              style={{
                border: "none",
                background: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              <Close size={18} className="text-neutral-0" />
            </button>
          </div>

          <Chatbox
            open={open}
            id={id}
            // @ts-ignore
            mode={window?.style?.mode ?? theme?.mode ?? "light"}
            primaryColor={
              // @ts-ignore
              window?.style?.primaryColor ?? theme?.primaryColor ?? "#2776EA"
            }
            // @ts-ignore
            botId={window.botId ?? botId}
            API_URL={API_URL ?? "https://api.sarufi.io"}
          />
        </div>
      )}
    </div>
  );
};

export default Chat;
