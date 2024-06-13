import axios from "axios";
import React, { CSSProperties, useEffect, useState } from "react";
import { Close, MinusIcon } from "../assets/icons";
import "./chat.css";
import Chatbox from "./chatbox";
import { SarufiIcon } from "../assets/illustrations";

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
  secondaryColor?: string;
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
    "--sarufi-secondary-color":
      theme?.mode === "dark" ? "#202C33" : theme?.secondaryColor ?? "#EDECE1",
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
      theme?.mode === "dark" ? "#005C4B" : theme?.primaryColor ?? "#2776EA",
    "--sarufi-received-box-bg":
      theme?.mode === "dark" ? "#202C33" : theme?.secondaryColor ?? "#EDECE1",
    "--sarufi-sent-box-color": theme?.mode === "dark" ? "white" : "white",
    "--sarufi-received-box-color":
      theme?.mode === "dark" ? "white" : theme?.receivedBoxColor ?? "black",
    "--sarufi-sent-box-link-color":
      theme?.mode === "dark" ? "#53BDEB" : theme?.sentBoxLinkColor ?? "black",
    "--sarufi-received-box-link-color":
      theme?.mode === "dark"
        ? "#53BDEB"
        : theme?.receivedBoxLinkColor ?? "black",
    "--sarufi-chatbox-bg": theme?.mode === "dark" ? "#0B141A" : "white",
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
        // border: "2px solid #000",
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
          <SarufiIcon
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
      <div
        style={{
          height: "100%",
          display: open ? "block" : "none",
          // borderRadius: "18px",
          // overflow: "hidden",
        }}
      >
        <div
          className="sarufi-flex-wide text-neutral-0"
          style={{
            // height: "42px",
            borderTopLeftRadius: "18px",
            borderTopRightRadius: "18px",
            padding: "1rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            background: "var(--sarufi-primary-color)",
            color: "white",
          }}
        >
          <div className="sarufi-flex sarufi-align-center">
            <div
              className="sarufi-flex-center"
              style={{
                background:
                  theme?.mode === "dark"
                    ? theme?.secondaryColor
                    : "var(--sarufi-secondary-color)",
                borderRadius: "50%",
                padding: ".5rem",
                marginRight: "10px",
                position: "relative",
              }}
            >
              <SarufiIcon
                style={{
                  color:
                    theme?.mode === "dark"
                      ? theme?.primaryColor
                      : "var(--sarufi-primary-color)",
                }}
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
                  position: "absolute",
                  bottom: "0",
                  right: "1px",
                  background: "#02B272",
                  borderRadius: "50%",
                  width: "10px",
                  height: "10px",
                }}
              />
            </div>
            <div>
              <p
                className="sarufi-ellipsed-text"
                style={{
                  fontWeight: 600,
                  marginBottom: "3px",
                  fontFamily: "var(--sarufi-font-family)",
                  fontSize: theme?.fontSize
                    ? Number(theme?.fontSize) * 1.1
                    : "1.1em",
                }}
              >
                {theme?.title}
              </p>
              <p
                style={{
                  fontFamily: "var(--sarufi-font-family)",
                  fontSize: "12px",
                }}
              >
                Online
              </p>
            </div>
          </div>
          <div className="flex-center">
            <button
              className="flex-center sarufi-button"
              onClick={() => setOpen(false)}
              style={{
                border: "none",
                background: "none",
                color: "white",
                cursor: "pointer",
                marginRight: "20px",
              }}
            >
              <MinusIcon size={16} className="text-neutral-0" />
            </button>
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
    </div>
  );
};

export default Chat;
