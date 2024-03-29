import axios from "axios";
import React, { CSSProperties, useEffect, useState } from "react";
import { Close, TextComponent } from "../assets/icons";
import "./chat.css";
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
  token?: string;
  theme?: ThemeType;
  popUpShow?: boolean;
};

const Chat = ({
  botId,
  token,
  theme: defaultTheme,
  popUpShow = true,
}: SarufiChatboxType) => {
  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<number | string>(new Date().valueOf());
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [dontShowPopup, setDontShowPopup] = useState<boolean>(false);
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

  const modal = document.createElement("div");
  modal.id = "sarufi-modal";
  if (!document.getElementById("sarufi-modal"))
    document.body.appendChild(modal);

  // get theme
  const fetchTheme = async () => {
    if (defaultTheme) {
      return setThemeConfig(defaultTheme);
    }
    try {
      const { data } = await axios.get(
        // @ts-ignore
        `${api_url}/plugin/${window?.botId ?? botId}/unauthenticated`
      );
      setThemeConfig(data?.theme_config);
    } catch (error: any) {}
  };

  useEffect(() => {
    fetchTheme();
  }, [defaultTheme]);

  useEffect(() => {
    if (dontShowPopup || !popUpShow) return;
    if (showPopup) return;

    // Show popup after 5 seconds
    setTimeout(() => {
      setShowPopup(!showPopup);
    }, 5000);
  }, [showPopup]);

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
      className={`sarufi-chat-container ${
        theme?.placement === "left" ? "sarufi-left-align" : "sarufi-right-align"
      } ${open ? "open" : ""}
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
              width: showPopup
                ? "fit-content"
                : theme?.buttonSize === "lg"
                ? "70px"
                : "50px",
            }
          : {}),
        ...style,
      }}
    >
      {!open && (
        <button
          className={`sarufi-shadow-xl ${showPopup && "sarufi-floating"}`}
          style={{
            display: showPopup ? "flex" : "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            cursor: "pointer",
            borderRadius: showPopup ? "50px" : "50%",
            padding: showPopup ? ".5rem 1rem" : undefined,
            height:
              theme?.buttonSize === "lg"
                ? "70px"
                : theme?.buttonSize === "sm"
                ? "30px"
                : "50px",
            width: showPopup
              ? "100%"
              : theme?.buttonSize === "lg"
              ? "70px"
              : theme?.buttonSize === "sm"
              ? "30px"
              : "50px",
            background: theme?.primaryColor ?? "#2776EA",
            color: "white",
            border: "none",
          }}
          onClick={() => {
            setOpen(true);
            setShowPopup(false);
            setDontShowPopup(true);
          }}
        >
          <TextComponent
            size={
              theme?.buttonSize === "lg"
                ? 40
                : theme?.buttonSize === "sm"
                ? 20
                : 30
            }
          />
          <div
            style={{
              display: showPopup ? "block" : "none",
              width: "fit-content",
              opacity: showPopup ? 1 : 0,
              marginLeft: "5px",
              textAlign: "start",
              fontSize: `${
                theme?.buttonSize === "sm" ? "10px" : "var(--sarufi-font-size)"
              }`,
            }}
          >
            <p style={{ fontWeight: "bold" }}>Need Help?</p>
            <p>Ask me</p>
          </div>
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
              className="flex-center sarufi-button"
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
            fontFamily={theme.fontFamily ?? "inherit"}
            fontSize={theme.fontSize ?? 16}
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
