import React from "react";
import axios from "axios";
import { CSSProperties, useEffect, useRef, useState } from "react";

// Local imports
import Button from "./button";
import Input from "./input";
import ChatLoader from "./chat-loader";
import { Close, SendIcon } from "../assets/icons";
import { SarufiIcon } from "../assets/illustrations";
import Media from "./media";
import DatePicker from "./message-actions/date-picker";
// import RecordAudio from "./message-actions/audio-record";

type ChatType = {
  message: string;
  sent?: boolean;
  received?: boolean;
  chat: any;
  type: string;
  actions: any;
  next_state: string;
};

const Chatbox = ({
  id,
  open,
  botId,
  API_URL,
  mode,
  primaryColor,
  token,
  fontFamily,
  fontSize,
}: {
  id: number | string;
  botId: string | number;
  API_URL: string;
  open: boolean;
  mode: "light" | "dark";
  primaryColor: string;
  token?: string;
  fontFamily: string;
  fontSize: string | number;
}) => {
  const [chats, setChats] = useState<ChatType[]>([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [chatId, setChatId] = useState<string | number>(id);
  const [isRecording] = useState(false);

  const onSubmit = (message: string, type?: string, itemId?: string) => {
    if (!message) return;
    setChats((prev: any[]) => {
      return [...prev, { message, sent: true }];
    });
    setValue("");
    setLoading(true);
    axios
      .post(
        `${API_URL}${
          token ? "/conversation/whatsapp" : "/plugin/conversation/" + botId
        }`,
        {
          message: itemId ?? message,
          chat_id: chatId,
          bot_id: botId,
          message_type: type ?? "text",
        },
        {
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: "Bearer " + token } : {}),
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
                data?.data?.actions?.find((action: any) => action?.send_message)
                  ?.send_message
                  ? data?.data?.actions?.find(
                      (action: any) => action?.send_message
                    )?.send_message
                  : typeof data?.data?.message === "string"
                  ? data?.data?.message
                  : data?.data?.response?.find(
                      (item: any) => Object.keys(item)[0] === "send_message"
                    )
                  ? data?.data?.response
                      ?.find(
                        (item: any) => Object.keys(item)[0] === "send_message"
                      )
                      ?.send_message?.join("\n")
                  : data?.data?.message?.join("\n"),
              received: true,
              chat: data?.data,
              type: data?.data?.actions
                ? data?.data?.actions?.find(
                    (action: any) => action?.send_reply_button
                  )?.send_reply_button?.type
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
                  : typeof error?.response?.data?.message === "string"
                  ? error?.response?.data?.message
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
    if (chatId !== id) {
      setChatId(id);
      setChats([]);
      setValue("");
    }
  }, [open]);

  return (
    <>
      <div
        ref={ref}
        id="sarufi-chat-container"
        style={{
          background: "var(--sarufi-chatbox-bg)",
          height: "calc( 100% - 160px )",
          // height: "100%",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
              padding: "6px 8px 8px 9px",
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
              <Chat
                chat={chat}
                key={index}
                onSubmit={onSubmit}
                primaryColor={primaryColor}
                mode={mode}
                fontFamily={fontFamily}
                fontSize={fontSize}
                index={index}
              />
            ))}
            {loading && (
              <div
                className={`sarufi-message-body`}
                style={{
                  background: "var(--sarufi-received-box-bg)",
                  padding: "6px 8px 8px 9px",
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
      <div
        className="sarufi-flex-wide"
        style={{
          background: "var(--sarufi-secondary-color)",
          // background: "rgb(0, 0, 0, 0.2)",
          padding: ".5rem",
        }}
      >
        {!isRecording && (
          <form
            style={{
              position: "relative",
              marginRight: ".5rem",
              width: "100%",
              background:
                mode === "light" ? "white" : "var(--sarufi-primary-color)",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(value);
            }}
          >
            <Input
              value={value}
              mode={mode}
              primaryColor={primaryColor}
              autoFocus
              placeholder="Compose a message"
              save={() => onSubmit(value)}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <Button
              mode={mode}
              label={
                <span className="sarufi-flex-center">
                  <SendIcon size={24} />
                </span>
              }
            />
          </form>
        )}
        <div
          className="sarufi-flex-center message-actions"
          style={{
            color: mode === "light" ? "#525252" : "white",
            width: isRecording ? "100%" : "auto",
          }}
        >
          {!isRecording && (
            <>
              {/* <button
                onClick={() => alert("We don't support this feature yet.")}
              >
                <Attachment size={18} />
              </button> */}
              <DatePicker
                onSelect={(d) =>
                  setValue(
                    `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
                  )
                }
                styles={{
                  margin: "0 .3rem",
                }}
              />
            </>
          )}
          {/* <RecordAudio
            readFile={() => alert("We don't support this feature yet.")}
            saveIsRecording={(record) => setIsRecording(record)}
          /> */}
        </div>
      </div>
      <p
        style={{
          fontSize: ".7rem",
          textAlign: "center",
          padding: "5px 0",
          color: mode === "dark" ? "white" : "",
          background:
            mode === "light" ? "white" : "var(--sarufi-primary-color)",
        }}
      >
        Powered by{" "}
        <a
          href="https://sarufi.io"
          target="_blank"
          style={{
            textDecoration: "none",
            fontWeight: "700",
            color: "#2776EA",
          }}
        >
          Sarufi
        </a>
      </p>
    </>
  );
};

export default Chatbox;

const Chat = ({
  chat,
  onSubmit,
  mode,
  fontFamily,
  fontSize,
  index,
  primaryColor,
}: {
  chat: any;
  onSubmit: (value: string, type?: string, id?: string) => void;
  mode: "dark" | "light";
  fontFamily: string;
  fontSize: string | number;
  index: number;
  primaryColor?: string;
}) => {
  let message =
    chat?.type === "button"
      ? chat?.actions?.find((action: any) => action?.send_reply_button)
          ?.send_reply_button?.body?.text
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

  // listen to escape keyboard event
  const keydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") return setOpenChoices(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", keydown, false);
    return () => {
      document.removeEventListener("keydown", keydown, false);
    };
  }, []);

  let hasMedia = false; // checks if media are present
  if (
    chat?.actions?.find(
      (action: {
        send_videos?: [];
        send_audios?: [];
        send_images?: [];
        send_stickers?: [];
        send_documents?: [];
        send_locations?: [];
      }) => {
        return (
          (action.send_audios && action.send_audios.length > 0) ||
          (action.send_images && action.send_images.length > 0) ||
          (action.send_videos && action.send_videos.length > 0) ||
          (action.send_documents && action.send_documents.length > 0) ||
          (action.send_stickers && action.send_stickers.length > 0) ||
          (action.send_locations && action.send_locations.length > 0)
        );
      }
    )
  )
    hasMedia = true;

  return (
    <li
      className={`${chat?.sent ? "sarufi-flex-end" : ""}`}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {!chat?.sent && (
        <div
          style={{
            marginRight: "5px",
          }}
        >
          <SarufiIcon
            size={20}
            style={{
              color: primaryColor,
            }}
          />
        </div>
      )}
      <div>
        <Media
          chat={chat}
          mode={mode}
          fontFamily={fontFamily}
          fontSize={fontSize}
          messageIndex={index}
        />
        <div
          className={`sarufi-message-body  ${chat?.sent ? "sent" : ""}`}
          style={{
            background: chat?.sent
              ? "var(--sarufi-sent-box-bg)"
              : "var(--sarufi-received-box-bg)",
            maxWidth: 280,
            width: hasMedia ? "100%" : "max-content",
            minWidth: "50px",
            padding: "6px 8px 8px 9px",
            marginTop: hasMedia ? "0" : "12px",
            position: "relative",
            borderRadius:
              chat?.actions?.find((action: any) => action?.send_reply_button)
                ?.send_reply_button?.action?.buttons?.length > 0 ||
              ((!message || typeof message !== "string") &&
                chat?.actions &&
                menu)
                ? "0rem"
                : ".3rem",
            ...(!hasMedia && !chat?.sent
              ? { borderTopRightRadius: ".3rem" }
              : {}),
          }}
        >
          {(!message || typeof message !== "string") &&
            chat?.actions &&
            menu && (
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
              message={
                typeof message === "string" ? message : message?.join("\n")
              }
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
            {chat?.actions
              ?.find((action: any) => action?.send_reply_button)
              ?.send_reply_button?.action?.buttons?.map(
                (el: any, i: number) => (
                  <li
                    style={{
                      width: "100%",
                      marginTop: "2px",
                      background: "var(--sarufi-received-box-bg)",
                      borderBottomLeftRadius:
                        i ===
                        chat?.actions?.find(
                          (action: any) => action?.send_reply_button
                        )?.send_reply_button?.action?.buttons?.length -
                          1
                          ? ".3rem"
                          : "0",
                      borderBottomRightRadius:
                        i ===
                        chat?.actions?.find(
                          (action: any) => action?.send_reply_button
                        )?.send_reply_button?.action?.buttons?.length -
                          1
                          ? ".3rem"
                          : "0",
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
                        padding: "10px",
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
            className="bg-neutral-0 sarufi-flex-center"
            style={{
              maxWidth: 280,
              marginTop: "2px",
              background: "var(--sarufi-received-box-bg)",
              borderBottomLeftRadius: ".3rem",
              borderBottomRightRadius: ".3rem",
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
                padding: "10px",
                fontFamily: "var(--sarufi-font-family)",
              }}
            >
              {menu["send_button"]?.button ??
                menu["send_button"]?.action?.button}
            </button>
          </div>
        )}
        {(!message || typeof message !== "string") &&
          chat?.actions &&
          menu &&
          openChoices && (
            <div
              className={`choices`}
              style={{
                position: "fixed",
                zIndex: 100004,
                transition: "0.35s linear",
              }}
            >
              <div
                className={"sarufi-backdrop"}
                style={{
                  position: "fixed",
                  background: "rgba(0, 0, 0, 0.6)",
                  zIndex: 100004,
                  transition: "0.35s linear",
                }}
                onClick={() => setOpenChoices(false)}
              />
              <div
                className={`sarufi-options sarufi-scroll-bar`}
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
                    className="sarufi-button"
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
      </div>
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
            width: "100%",
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
  const url_pattern =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  let strArr: string[] = [];
  const words = str.split(" ");
  words.forEach((word) => {
    // split words by \n
    let newWords = word.split("\n");
    let newWordsArr: string[] = [];
    newWords.forEach((word) => {
      if (!word.includes(".")) {
        return (newWordsArr = [...newWordsArr, word]);
      }
      if (!url_pattern.test(word)) {
        return (newWordsArr = [...newWordsArr, word]);
      }
      const protocol_pattern = /^(?:(?:https?|ftp):\/\/)/i;
      const href = protocol_pattern.test(word) ? word : "http://" + word;
      return (newWordsArr = [
        ...newWordsArr,
        '<a href="' + href + '" target="_blank">' + word + "</a>",
      ]);
    });

    strArr = [...strArr, newWordsArr.join("\n")];
  });
  return strArr.join(" ");
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
