import React from "react";
import axios from "axios";
import { CSSProperties, useEffect, useRef, useState } from "react";
import Button from "./button";
import Input from "./input";
import ChatLoader from "./chat-loader";
import { Close, SendIcon } from "../assets/icons";
import styles from "./chat.module.css";

const Chatbox = ({
  id,
  open,
  botId,
  API_URL,
}: {
  id: number | string;
  botId: string | number;
  API_URL: string;
  open: boolean;
}) => {
  const [chats, setChats] = useState<any[]>([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const onSubmit = (message: string, type?: string, itemId?: string) => {
    if (!message) return;
    setChats((prev: any[]) => {
      return [...prev, { message, sent: true }];
    });

    setValue("");
    setLoading(true);
    axios
      .post(
        `${API_URL}/conversation/whatsapp`,
        {
          message: itemId ?? message,
          chat_id: id,
          bot_id: botId,
          message_type: type ?? "text",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data: any) => {
        setChats((prev: any[]) => {
          return [
            ...prev,
            {
              message:
                typeof data?.data?.actions === "object" &&
                data?.data?.actions[0]?.send_message
                  ? data?.data?.actions[0]?.send_message
                  : typeof data?.data?.message === "string"
                  ? data?.data?.message
                  : data?.data?.message?.join("\n"),
              received: true,
              chat: data?.data,
              type: data?.data?.actions
                ? data?.data?.actions[0]?.send_reply_button?.type
                : "",
              actions: data?.data?.actions,
              next_state: data?.data?.next_state,
            },
          ];
        });
        setLoading(false);
      })
      .catch((error) => {
        // show error as a chat / a pospup within an app
        setChats((prev: any[]) => {
          return [
            ...prev,
            {
              message:
                typeof error?.response?.data?.detail === "string"
                  ? error?.response?.data?.detail
                  : typeof error?.response?.data?.detail === "object"
                  ? error?.response?.data?.detail[0]?.msg
                  : error?.message,
            },
          ];
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    if (ref.current)
      ref.current.scrollTop =
        ref.current?.scrollHeight - ref.current.clientHeight;
  }, [chats]);

  useEffect(() => {
    setChats([]);
    setValue("");
  }, [open]);

  return (
    <>
      <div
        ref={ref}
        id="sarufi-chat-container"
        style={{
          background: "var(--sarufi-chatbox-bg)",
          height: "calc( 100% - 100px )",
          overflowY: "auto",
          position: "relative",
        }}
        className="sarufi-scroll-bar"
      >
        <div
          style={{
            position: "relative",
            padding: "1rem",
          }}
        >
          <div
            className="sarufi-message-body"
            style={{
              maxWidth: 280,
              background: "var(--sarufi-received-box-bg)",
              padding: "1rem",
              marginTop: ".7rem",
              position: "relative",
              borderRadius: ".3rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--sarufi-font-family)",
              }}
            >
              Send a message to initiate conversation i.e "Hello"
            </p>
          </div>
          <ul>
            {chats?.map((chat, index) => (
              <Chat chat={chat} key={index} onSubmit={onSubmit} />
            ))}
            {loading && (
              <div
                className={`sarufi-message-body`}
                style={{
                  background: "var(--sarufi-received-box-bg)",
                  padding: "1rem",
                  marginTop: ".7rem",
                  position: "relative",
                  borderRadius: ".3rem",
                  maxWidth: 100,
                }}
              >
                <ChatLoader />
              </div>
            )}
          </ul>
        </div>
      </div>
      <form
        style={{
          position: "absolute",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(value);
        }}
      >
        <Input
          value={value}
          autoFocus
          placeholder="Compose a message"
          save={() => onSubmit(value)}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button
          label={
            <span className="sarufi-flex-center">
              <SendIcon size={30} />
            </span>
          }
        />
      </form>
    </>
  );
};

export default Chatbox;

const Chat = ({
  chat,
  onSubmit,
}: {
  chat: any;
  onSubmit: (value: string, type?: string, id?: string) => void;
}) => {
  let message =
    chat?.type === "button"
      ? chat?.actions[0]?.send_reply_button?.body?.text
      : chat?.message;

  let menu = chat?.actions?.find(
    (e: any) => Object.keys(e)[0] === "send_button"
  );
  const [openChoices, setOpenChoices] = useState<boolean>(false);

  useEffect(() => {
    let container = document.getElementById("sarufi-chat-container");
    if (openChoices && container) {
      container.style.overflowY = "hidden";
    }
    if (!openChoices && container) {
      container.style.overflowY = "auto";
    }
  }, [openChoices]);

  return (
    <li
      className={`${chat?.sent ? "sarufi-flex-end" : ""}`}
      style={{
        position: "relative",
      }}
    >
      <div
        className={`sarufi-message-body ${chat?.sent ? "sent" : ""}`}
        style={{
          background: chat?.sent
            ? "var(--sarufi-sent-box-bg)"
            : "var(--sarufi-received-box-bg)",
          maxWidth: 280,
          padding: "1rem",
          marginTop: ".7rem",
          position: "relative",
          borderRadius: ".3rem",
        }}
      >
        {(!message || typeof message !== "string") && chat?.actions && menu && (
          <>
            {menu["send_button"]?.header && (
              <Message
                message={menu["send_button"]?.header}
                style={{
                  marginBottom: "1rem",
                }}
              />
            )}
            {menu["send_button"]?.body && (
              <Message message={menu["send_button"]?.body} />
            )}
            {menu["send_button"]?.footer && (
              <Message
                message={menu["send_button"]?.footer}
                style={{
                  marginTop: "1rem",
                  fontSize: ".9em",
                  opacity: 0.7,
                }}
              />
            )}
          </>
        )}
        {(chat?.type || message) && !menu && (
          <Message
            message={typeof message === "string" ? message : message.join("\n")}
          />
        )}
      </div>
      {chat?.type === "button" && (
        <ul
          className="sarufi-flex-wide sarufi-flex-wrap"
          style={{
            maxWidth: 280,
          }}
        >
          {chat?.actions[0]?.send_reply_button?.action?.buttons?.map(
            (el: any, i: number) => (
              <li
                style={{
                  width:
                    chat?.actions[0]?.send_reply_button?.action?.buttons
                      ?.length === 3 ||
                    chat?.actions[0]?.send_reply_button?.action?.buttons
                      ?.length === 1
                      ? "100%"
                      : "calc( 50% - 0.15rem )",
                  marginTop: ".3rem",
                  background: "var(--sarufi-received-box-bg)",
                  borderRadius: ".3rem",
                }}
                key={i}
              >
                <button
                  onClick={() =>
                    onSubmit(
                      el?.reply?.title,
                      chat?.type !== "text" ? "interactive" : "text",
                      el?.reply?.id
                    )
                  }
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "none",
                    border: "none",
                    color: "var(--sarufi-received-box-link-color)",
                    cursor: "pointer",
                    fontSize: "inherit",
                    padding: "1rem",
                    fontFamily: "var(--sarufi-font-family)",
                  }}
                  className="sarufi-flex-center sarufi-flex-wrap"
                >
                  {el?.reply?.title}
                </button>
              </li>
            )
          )}
        </ul>
      )}
      {(!message || typeof message !== "string") && chat?.actions && menu && (
        <div
          className="bg-neutral-0 p-1 mt-300 br-300 sarufi-flex-center"
          style={{
            maxWidth: 280,
            marginTop: ".3rem",
            background: "var(--sarufi-received-box-bg)",
            borderRadius: ".3rem",
          }}
        >
          <button
            onClick={() => setOpenChoices(true)}
            className="link text-small-100 sarufi-flex-center cursor-pointer"
            style={{
              width: "100%",
              height: "100%",
              background: "none",
              border: "none",
              color: "var(--sarufi-received-box-link-color)",
              cursor: "pointer",
              fontSize: "inherit",
              padding: "1rem",
              fontFamily: "var(--sarufi-font-family)",
            }}
          >
            {menu["send_button"]?.button ?? menu["send_button"]?.action?.button}
          </button>
        </div>
      )}
      {(!message || typeof message !== "string") &&
        chat?.actions &&
        menu &&
        openChoices && (
          <div
            className={` ${styles.choices}`}
            style={{
              position: "fixed",
              zIndex: 100004,
              transition: "0.35s linear",
            }}
          >
            <div
              className={styles["sarufi-backdrop"]}
              style={{
                position: "fixed",
                background: "rgba(0, 0, 0, 0.6)",
                zIndex: 100004,
                transition: "0.35s linear",
              }}
              onClick={() => setOpenChoices(false)}
            />
            <div
              className={`${styles["sarufi-options"]} sarufi-scroll-bar`}
              style={{
                zIndex: 100005,
                background: "var(--sarufi-received-box-bg)",
                color: "var(--sarufi-received-box-color)",
                borderRadius: ".3rem",
              }}
            >
              <div
                className="sarufi-flex-start"
                style={{
                  padding: "1rem",
                  paddingBottom: ".5rem",
                  marginBottom: "1rem",
                }}
              >
                <button
                  onClick={() => setOpenChoices(false)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--sarufi-received-box-color)",
                  }}
                >
                  <Close size={18} />
                </button>
                {menu["send_button"]?.action?.sections[0]?.title && (
                  <p
                    style={{
                      width: "100%",
                      marginLeft: "1rem",
                      paddingRight: "2rem",
                      textAlign: "center",
                      fontFamily: "var(--sarufi-font-family)",
                    }}
                  >
                    {menu["send_button"]?.action?.sections[0]?.title}
                  </p>
                )}
              </div>
              <ul
                style={{
                  padding: "1rem",
                  paddingTop: "0",
                }}
              >
                {menu["send_button"]?.action?.sections[0]?.rows?.filter(
                  (el: any) => el?.title
                )?.length > 0 &&
                  menu["send_button"]?.action?.sections[0]?.rows
                    ?.filter((el: any) => el?.title)
                    ?.map((row: any) => (
                      <li
                        className="sarufi-flex-wide "
                        style={{
                          marginBottom: "1.5rem",
                          cursor: "pointer",
                        }}
                        key={row?.title}
                        onClick={() => {
                          onSubmit(row?.title, "interactive", row?.id);
                          setOpenChoices(false);
                        }}
                      >
                        <div>
                          <p
                            className="text-small-200"
                            style={{
                              fontFamily: "var(--sarufi-font-family)",
                            }}
                          >
                            {row?.title}
                          </p>
                          <p
                            style={{
                              opacity: ".7",
                              fontSize: ".9em",
                              fontFamily: "var(--sarufi-font-family)",
                            }}
                          >
                            {row?.description}
                          </p>
                        </div>
                        <div>
                          <span
                            className="sarufi-flex-center"
                            style={{
                              height: 15,
                              width: 15,
                              borderRadius: "50%",
                              border:
                                "1px solid var(--sarufi-received-box-color)",
                              marginLeft: "1rem",
                            }}
                          />
                        </div>
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        )}
    </li>
  );
};

const Message = ({
  message,
  className,
  style,
}: {
  message: string;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <>
      {typeof message === "string" && (
        <p
          style={{
            fontFamily: "var(--sarufi-font-family)",
            ...style,
          }}
          className={className ?? ""}
          dangerouslySetInnerHTML={{ __html: wrapUrl(wrap(message)) }}
        />
      )}
    </>
  );
};

export const wrapUrl = (str: string) => {
  let url_pattern =
    /(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}\-\x{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?/gi;

  return str.replace(url_pattern, function (url) {
    var protocol_pattern = /^(?:(?:https?|ftp):\/\/)/i;
    var href = protocol_pattern.test(url) ? url : "http://" + url;
    return '<a href="' + href + '" target="' + "_blank" + '">' + url + "</a>";
  });
};

export const wrap = (str: string) => {
  if (str && typeof str === "string") {
    return str
      ?.replace(/(?:\*)([^*]*)(?:\*)/gm, "<strong>$1</strong> ")
      ?.replace(/(?:_)([^_]*)(?:_)/gm, "<i>$1</i> ")
      ?.replace(/(?:~)([^~]*)(?:~)/gm, "<strike>$1</strike> ")
      ?.replace(/(?:```)([^```]*)(?:```)/gm, "<tt>$1</tt> ");
  } else {
    return str;
  }
};
