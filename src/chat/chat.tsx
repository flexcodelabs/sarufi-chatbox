import axios from "axios";
import React, { CSSProperties, useEffect, useState } from "react";
import { Close, TextComponent } from "../assets/icons";
import styles from "./chat.module.css";
import Chatbox from "./chatbox";

interface ThemeType {
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
  title?: string;
  placement?: "left" | "right";
  height?: string | number;
  width?: string | number;
}

export type SarufiChatboxType = {
  botId: string | number;
  token?: string
  theme?: ThemeType
};

const Chat = ({ botId, token }: SarufiChatboxType) => {
  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<number | string>(new Date().valueOf());
  const [theme, setThemeConfig] = useState<ThemeType>({
    primaryColor: "#2776EA",
    borderColor: "lightgray",
    fontSize: "14",
    fontFamily: "InterRegular",
    sentBoxBg: "#D8F9D4",
    receivedBoxBg: "white",
    sentBoxColor: "black",
    receivedBoxColor: "black",
    chatboxBg: "#EDECE1",
    receivedBoxLinkColor: "blue",
    sentBoxLinkColor: "white",
    buttonSize: "md",
    mode: "light",
    title: "Chat",
    placement: "right",
    height: 500,
    width: 400,
  });

  const api_url = "https://api.sarufi.io";

  // get theme
  const fetchTheme = async () => {
    if(theme) {
      return setThemeConfig(theme)
    }
    try {
      const { data } = await axios.get(
        `${api_url}/plugin/${botId}/unauthenticated`
      );
      setThemeConfig(data?.theme_config);
    } catch (error: any) {}
  };

  useEffect(() => {
    fetchTheme();
  }, []);

  // set up styles
  const style = {
    "--sarufi-primary-color":
      theme?.mode === "dark" ? "#202C33" : theme?.primaryColor ?? "#2776EA",
    "--sarufi-font-size": `${theme?.fontSize ?? 14}px`,
    "--sarufi-font-family":
      theme?.fontFamily === "InterRegular"
        ? "'Inter', sans-serif"
        : theme?.fontFamily === "PoppinsRegular"
        ? "'Poppins', sans-serif"
        : theme?.fontFamily === "inherit"
        ? "inherit"
        : "'Inter', sans-serif",
    "--sarufi-border-color": theme?.borderColor ?? "lightgray",
    "--sarufi-sent-box-bg":
      theme?.mode === "dark" ? "#005C4B" : theme?.sentBoxBg ?? "#D8F9D4",
    "--sarufi-received-box-bg":
      theme?.mode === "dark" ? "#202C33" : theme?.receivedBoxBg ?? "white",
    "--sarufi-sent-box-color":
      theme?.mode === "dark" ? "white" : theme?.sentBoxColor ?? "black",
    "--sarufi-received-box-color":
      theme?.mode === "dark" ? "white" : theme?.receivedBoxColor ?? "black",
    "--sarufi-sent-box-link-color":
      theme?.mode === "dark" ? "#53BDEB" : theme?.sentBoxLinkColor ?? "black",
    "--sarufi-received-box-link-color":
      theme?.mode === "dark"
        ? "#53BDEB"
        : theme?.receivedBoxLinkColor ?? "black",
    "--sarufi-chatbox-bg":
      theme?.mode === "dark" ? "#0B141A" : theme?.chatboxBg ?? "#EDECE1",
    "--sarufi-chatbox-height": theme?.height ? theme?.height + "px" : "500px",
    "--sarufi-chatbox-width": theme?.width ? theme?.width + "px" : "400px",
  } as CSSProperties;

  return (
    <div
      className={`${styles["sarufi-chat-container"]} ${
        theme?.placement === "left"
          ? styles["sarufi-left-align"]
          : styles["sarufi-right-align"]
      } ${open ? styles.open : ""}
      ${open ? "sarufi-shadow-xl" : "sarufi-flex-center"}`}
      style={{
        position: "fixed",
        fontFamily:
          theme?.fontFamily === "InterRegular"
            ? "'Inter', sans-serif"
            : theme?.fontFamily === "PoppinsRegular"
            ? "'Poppins', sans-serif"
            : theme?.fontFamily === "inherit"
            ? "inherit"
            : "'Inter', sans-serif",
        ...(!open
          ? {
              height: theme?.buttonSize === "lg" ? "70px" : "50px",
              width: theme?.buttonSize === "lg" ? "70px" : "50px",
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
              theme?.buttonSize === "lg"
                ? "70px"
                : theme?.buttonSize === "sm"
                ? "30px"
                : "50px",
            width:
              theme?.buttonSize === "lg"
                ? "70px"
                : theme?.buttonSize === "sm"
                ? "30px"
                : "50px",
            background: theme?.primaryColor ?? "#2776EA",
            color: "white",
            border: "none",
          }}
          onClick={() => setOpen(true)}
        >
          <TextComponent size={theme?.buttonSize === "sm" ? 20 : 30} />
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
                fontSize: theme?.fontSize
                  ? Number(theme?.fontSize) * 1.1
                  : "1.1em",
              }}
            >
              {theme?.title}
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
            mode={theme?.mode ?? "light"}
            primaryColor={theme?.primaryColor ?? "#2776EA"}
            // @ts-ignore
            botId={window?.botId ?? botId}
            token={token}
            API_URL={api_url}
          />
        </div>
      )}
    </div>
  );
};

export default Chat;
