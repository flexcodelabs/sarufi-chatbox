import React, { useState } from "react";
import Modal from "./modal";
import AudioPreview from "./audio";
import VideoPreview from "./video";
import ImagePreview from "./image";
import { DownloadIcon } from "../assets/icons";
import { wrap, wrapUrl } from "./chatbox";
import "../style.css";

export type Media =
  | "images"
  | "videos"
  | "audios"
  | "documents"
  | "stickers"
  | "locations";

const MediaPreview = ({
  type,
  url = "",
  caption,
  mode,
  fontFamily,
  fontSize,
  index,
  chat,
  mediaId,
  location,
  showArrow,
}: {
  type: Media;
  url?: string;
  caption: string;
  mode: "dark" | "light";
  fontFamily: string;
  fontSize: string | number;
  index?: number;
  chat?: any;
  mediaId: string;
  showArrow?: boolean;
  location?: {
    latitude: string;
    longitude: string;
    address?: string;
    name?: string;
  };
}) => {
  const [fullScreen, setFullScreen] = useState(false);
  const order = [
    "images",
    "stickers",
    "videos",
    "audios",
    "documents",
    "locations",
  ];
  const findIndex = order.findIndex((item) => item === type);
  const findAboveIndex = order.findIndex((item) => {
    if (
      item === "images" &&
      chat?.actions?.find((action: any) => action.send_images)?.send_images
        ?.length > 0
    ) {
      return true;
    } else if (
      item === "stickers" &&
      chat?.actions?.find((action: any) => action.send_stickers)?.send_stickers
        ?.length > 0
    ) {
      return true;
    } else if (
      item === "audios" &&
      chat?.actions?.find((action: any) => action.send_audios)?.send_audios
        ?.length > 0
    ) {
      return true;
    } else if (
      item === "videos" &&
      chat?.actions?.find((action: any) => action.send_videos)?.send_videos
        ?.length > 0
    ) {
      return true;
    } else if (
      item === "documents" &&
      chat?.actions?.find((action: any) => action.send_documents)
        ?.send_documents?.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div
      className={`sarufi-media-preview sarufi-message-body ${
        (findIndex <= findAboveIndex && !index) || showArrow
          ? "sarufi-message-body-w-arrow"
          : ""
      }`}
      style={{
        background: "var(--sarufi-received-box-bg)",
        maxWidth: 280,
        padding: "6px 8px 8px 9px",
        marginTop: findIndex <= findAboveIndex && !index ? ".7rem" : "0",
        marginBottom: ".3rem",
        position: "relative",
        borderTopLeftRadius: findIndex <= findAboveIndex ? "7.5px" : "0",
        borderTopRightRadius: findIndex <= findAboveIndex ? "7.5px" : "0",
      }}
    >
      <>
        {(type === "images" || type === "stickers") && (
          <ImagePreview
            url={url}
            caption={caption}
            openFullScreen={() => setFullScreen(true)}
            isFullScreen={false}
            fontFamily={fontFamily}
            fontSize={fontSize}
          />
        )}
        {type === "audios" && (
          <div
            style={{
              background:
                mode === "dark" ? "rgba(255, 255, 255, .1)" : "rgba(0,0,0,.1)",
              borderRadius: ".3rem",
              padding: ".1rem .5rem",
            }}
          >
            <AudioPreview
              url={url}
              fontSize={fontSize}
              mode={mode}
              mediaId={mediaId}
            />
          </div>
        )}
        {type === "videos" && (
          <VideoPreview
            url={url}
            caption={caption}
            fontFamily={fontFamily}
            fontSize={fontSize}
            mediaId={mediaId}
            mode={mode}
          />
        )}
        {type === "documents" && (
          <div
            style={{
              background:
                mode === "dark" ? "rgba(255, 255, 255, .1)" : "rgba(0,0,0,.1)",
              borderRadius: ".3rem",
              padding: ".1rem .5rem",
            }}
          >
            <DocumentPreview url={url} />
          </div>
        )}
        {type === "locations" && (
          <div
            style={{
              margin: ".5rem",
            }}
          >
            <div
              style={{
                marginBottom: ".4rem",
              }}
            >
              Location:
            </div>
            <div>
              {location?.latitude && (
                <div>
                  <p
                    style={
                      {
                        // marginTop: ".2rem",
                      }
                    }
                  >
                    <span
                      style={{
                        opacity: 0.7,
                      }}
                    >
                      Latitude:
                    </span>{" "}
                    {location?.latitude}
                  </p>
                </div>
              )}
              {/* caption */}
              {location?.longitude && (
                <div>
                  <p
                    style={{
                      marginTop: ".2rem",
                    }}
                  >
                    <span
                      style={{
                        opacity: 0.7,
                      }}
                    >
                      Longitude:
                    </span>{" "}
                    {location?.longitude}
                  </p>
                </div>
              )}
              {location?.name && (
                <div>
                  <p
                    style={{
                      marginTop: ".2rem",
                    }}
                  >
                    <span
                      style={{
                        opacity: 0.7,
                      }}
                    >
                      Name:
                    </span>{" "}
                    {location?.name}
                  </p>
                </div>
              )}
              {/* caption */}
              {location?.address && (
                <div>
                  <p
                    style={{
                      marginTop: ".2rem",
                    }}
                  >
                    <span
                      style={{
                        opacity: 0.7,
                      }}
                    >
                      Address:
                    </span>{" "}
                    {location?.address}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </>
      <Modal
        close={() => setFullScreen(false)}
        open={fullScreen}
        closeWithBackdrop
        mode={mode}
      >
        <>
          {(type === "images" || type === "stickers") && (
            <ImagePreview
              url={url}
              caption={caption}
              openFullScreen={() => setFullScreen(true)}
              isFullScreen={fullScreen}
              fontFamily={fontFamily}
              fontSize={fontSize}
            />
          )}
        </>
      </Modal>
      {caption && (
        <p
          style={{
            margin: ".5rem 0 .7rem",
            color: "var(--sarufi-received-box-color)",
            fontFamily: "var(--sarufi-font-family)",
          }}
        >
          {wrap(wrapUrl(caption))}
        </p>
      )}
    </div>
  );
};

export default MediaPreview;

const DocumentPreview = ({ url }: { url: string }) => {
  return (
    <div
      style={{
        margin: ".5rem .5rem .5rem 0rem",
      }}
      className="sarufi-flex-wide"
    >
      <div
        style={{
          width: "calc( 100% - 50px )",
          transform: "scale(0.9)",
        }}
      >
        <span
          className="sarufi-flex-start"
          style={{
            width: "100%",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          <span
            style={{
              display: "-webkit-box",
              width: "100%",
            }}
          >
            {url}
          </span>
        </span>
      </div>
      {/* download */}{" "}
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--sent-box-text-color)",
        }}
        onClick={() => downloadFile(url)}
      >
        <DownloadIcon />
      </button>
    </div>
  );
};

export function downloadFile(url: string) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let tempUrl = URL.createObjectURL(file);

      const aTag = document.createElement("a");
      aTag.href = tempUrl;
      aTag.target = "_blank";
      aTag.download = "sarufi_document";
      aTag.download = url.replace(/^.*[\\\/]/, "");
      document.body.appendChild(aTag);
      aTag.click();
      URL.revokeObjectURL(tempUrl);
      aTag.remove();
    })
    .catch(() => {
      alert("Failed to download file!");
    });
}
