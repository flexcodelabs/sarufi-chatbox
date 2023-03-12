import React, { useState } from "react";
import Modal from "./modal";
import "../style.css";
import AudioPreview from "./audio";
import VideoPreview from "./video";
import ImagePreview from "./image";
import { DownloadIcon } from "../assets/icons";

export type Media =
  | "images"
  | "videos"
  | "audios"
  | "documents"
  | "stickers"
  | "locations";

const MediaPreview = ({
  type,
  url,
  caption,
  mode,
  fontFamily,
  fontSize,
  index,
  messageIndex,
}: {
  type: Media;
  url: string;
  caption: string;
  mode: "dark" | "light";
  fontFamily: string;
  fontSize: string | number;
  index: number;
  messageIndex: number;
}) => {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div
      className="sarufi-media-preview"
      style={{
        marginBottom: ".7rem",
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
              caption={caption}
              index={index}
              messageIndex={messageIndex}
              fontSize={fontSize}
            />
          </div>
        )}
        {type === "videos" && (
          <VideoPreview
            url={url}
            caption={caption}
            openFullScreen={() => setFullScreen(true)}
            isFullScreen={false}
            fontFamily={fontFamily}
            fontSize={fontSize}
            index={index}
            messageIndex={messageIndex}
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
            <DocumentPreview url={url} caption={caption} />
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
          {type === "videos" && (
            <VideoPreview
              url={url}
              caption={caption}
              openFullScreen={() => setFullScreen(true)}
              isFullScreen={fullScreen}
              fontFamily={fontFamily}
              fontSize={fontSize}
              index={index}
              messageIndex={messageIndex}
            />
          )}
        </>
      </Modal>
    </div>
  );
};

export default MediaPreview;

const DocumentPreview = ({
  url,
  caption,
}: {
  url: string;
  caption: string;
}) => {
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
        <span
          style={{
            opacity: "0.7",
          }}
        >
          {caption}
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
