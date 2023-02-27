import React, { CSSProperties, useState } from "react";
import { Close, TextComponent } from "../assets/icons";
import styles from "./chat.module.css";
import Chatbox from "./chatbox";

export type SarufiChatboxType = {
  botId: string | number;
  API_URL?: string;
  title?: string;
  token?: string;
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
    height?: string | number;
    width?: string | number;
  };
};

const Chat = ({
  botId,
  API_URL,
  theme,
  title = "Chat",
  token,
}: SarufiChatboxType) => {
  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<number | string>(new Date().valueOf());

  // set up styles
  const style = {
    "--sarufi-primary-color":
      // @ts-ignore
      window?.sarufi_theme?.mode === "dark" || theme?.mode === "dark"
        ? "#202C33"
        : // @ts-ignore
          window?.sarufi_theme?.primaryColor ??
          theme?.primaryColor ??
          "#2776EA",

    "--sarufi-font-size":
      // @ts-ignore
      `${window?.sarufi_theme?.fontSize ?? theme?.fontSize ?? 14}px`,

    "--sarufi-font-family":
      // @ts-ignore
      window?.sarufi_theme?.fontFamily === "PoppinsRegular"
        ? "'Poppins', sans-serif"
        : // @ts-ignore
        window?.sarufi_theme?.fontFamily === "InterRegular"
        ? "'Inter', sans-serif"
        : theme?.fontFamily === "InterRegular"
        ? "'Inter', sans-serif"
        : theme?.fontFamily === "PoppinsRegular"
        ? "'Poppins', sans-serif"
        : // @ts-ignore
        window?.sarufi_theme?.fontFamily === "inherit" ||
          theme?.fontFamily === "inherit"
        ? "inherit"
        : "'Inter', sans-serif",

    "--sarufi-border-color":
      // @ts-ignore
      window?.sarufi_theme?.borderColor ?? theme?.borderColor ?? "lightgray",

    "--sarufi-sent-box-bg":
      // @ts-ignore
      window?.sarufi_theme?.mode === "dark" || theme?.mode === "dark"
        ? "#005C4B"
        : // @ts-ignore
          window?.sarufi_theme?.sentBoxBg ?? theme?.sentBoxBg ?? "#D8F9D4",

    "--sarufi-received-box-bg":
      // @ts-ignore
      window?.sarufi_theme?.mode === "dark" || theme?.mode === "dark"
        ? "#202C33"
        : // @ts-ignore
          window?.sarufi_theme?.receivedBoxBg ??
          theme?.receivedBoxBg ??
          "white",

    "--sarufi-sent-box-color":
      // @ts-ignore
      window?.sarufi_theme?.mode === "dark" || theme?.mode === "dark"
        ? "white"
        : // @ts-ignore
          window?.sarufi_theme?.sentBoxColor ?? theme?.sentBoxColor ?? "black",

    "--sarufi-received-box-color":
      // @ts-ignore
      window?.sarufi_theme?.mode === "dark" || theme?.mode === "dark"
        ? "white"
        : // @ts-ignore
          window?.sarufi_theme?.receivedBoxColor ??
          theme?.receivedBoxColor ??
          "black",

    "--sarufi-sent-box-link-color":
      // @ts-ignore
      window?.sarufi_theme?.mode === "dark" || theme?.mode === "dark"
        ? "#53BDEB"
        : // @ts-ignore
          window?.sarufi_theme?.sentBoxLinkColor ??
          theme?.sentBoxLinkColor ??
          "black",

    "--sarufi-received-box-link-color":
      // @ts-ignore
      window?.sarufi_theme?.mode === "dark" || theme?.mode === "dark"
        ? "#53BDEB"
        : // @ts-ignore
          window?.sarufi_theme?.receivedBoxLinkColor ??
          theme?.receivedBoxLinkColor ??
          "black",

    "--sarufi-chatbox-bg":
      // @ts-ignore
      window?.sarufi_theme?.mode === "dark" || theme?.mode === "dark"
        ? "#0B141A"
        : // @ts-ignore
          window?.sarufi_theme?.chatboxBg ?? theme?.chatboxBg ?? "#EDECE1",
    "--sarufi-chatbox-height":
      // @ts-ignore
      window?.sarufi_theme?.height
        ? // @ts-ignore
          window?.sarufi_theme?.height + "px"
        : theme?.height
        ? theme?.height + "px"
        : "500px",
    "--sarufi-chatbox-width":
      // @ts-ignore
      window?.sarufi_theme?.width
        ? // @ts-ignore
          window?.sarufi_theme?.width + "px"
        : theme?.width
        ? theme?.width + "px"
        : "400px",
  } as CSSProperties;

  return (
    <div
      className={`${styles["sarufi-chat-container"]} ${
        // @ts-ignore
        window?.sarufi_theme?.placement === "left" ||
        theme?.placement === "left"
          ? styles["sarufi-left-align"]
          : styles["sarufi-right-align"]
      } ${open ? styles.open : ""}
      ${open ? "sarufi-shadow-xl" : "sarufi-flex-center"}`}
      style={{
        position: "fixed",
        fontFamily:
          // @ts-ignore
          window?.sarufi_theme?.fontFamily === "PoppinsRegular"
            ? "'Poppins', sans-serif"
            : // @ts-ignore
            window?.sarufi_theme?.fontFamily === "InterRegular"
            ? "'Inter', sans-serif"
            : theme?.fontFamily === "InterRegular"
            ? "'Inter', sans-serif"
            : theme?.fontFamily === "PoppinsRegular"
            ? "'Poppins', sans-serif"
            : // @ts-ignore
            window?.sarufi_theme?.fontFamily === "inherit" ||
              theme?.fontFamily === "inherit"
            ? "inherit"
            : "'Inter', sans-serif",
        ...(!open
          ? {
              height:
                // @ts-ignore
                window?.sarufi_theme?.buttonSize === "lg" ||
                theme?.buttonSize === "lg"
                  ? "70px"
                  : "50px",
              width:
                // @ts-ignore
                window?.sarufi_theme?.buttonSize === "lg" ||
                theme?.buttonSize === "lg"
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
              window?.sarufi_theme?.buttonSize === "lg" ||
              theme?.buttonSize === "lg"
                ? "70px"
                : // @ts-ignore
                window?.sarufi_theme?.buttonSize === "sm" ||
                  theme?.buttonSize === "sm"
                ? "30px"
                : "50px",
            width:
              // @ts-ignore
              window?.sarufi_theme?.buttonSize === "lg" ||
              theme?.buttonSize === "lg"
                ? "70px"
                : // @ts-ignore
                window?.sarufi_theme?.buttonSize === "sm" ||
                  theme?.buttonSize === "sm"
                ? "30px"
                : "50px",
            background:
              // @ts-ignore
              window?.sarufi_theme?.primaryColor ??
              theme?.primaryColor ??
              "#2776EA",
            color: "white",
            border: "none",
          }}
          onClick={() => setOpen(true)}
        >
          <TextComponent
            size={
              // @ts-ignore
              window?.sarufi_theme?.buttonSize === "sm" ||
              theme?.buttonSize === "sm"
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
                fontSize: window?.sarufi_theme?.fontSize
                  ? // @ts-ignore
                    window?.sarufi_theme?.fontSize * 1.1
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
            mode={window?.sarufi_theme?.mode ?? theme?.mode ?? "light"}
            primaryColor={
              // @ts-ignore
              window?.sarufi_theme?.primaryColor ??
              theme?.primaryColor ??
              "#2776EA"
            }
            // @ts-ignore
            botId={window?.botId ?? botId}
            API_URL={API_URL ?? "https://api.sarufi.io"}
            token={token}
          />
        </div>
      )}
    </div>
  );
};

export default Chat;
