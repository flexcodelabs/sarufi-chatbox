import React, { CSSProperties, useEffect, useState } from "react";
import { FullSCreen, Pause, Play } from "../assets/icons";
import ChatLoader from "./chat-loader";
import styles from "./media.module.css";
import Modal from "./modal";

const VideoPreview = ({
  url,
  caption,
  fontFamily,
  fontSize,
  mediaId,
  mode,
}: {
  url: string;
  caption: string;
  fontFamily: string;
  fontSize: string | number;
  mediaId: string;
  mode?: "dark" | "light";
}) => {
  const [isPlaying, setPlaying] = useState(false);
  const [currentTimeInSec, setCurrentTimeInSec] = useState(0);
  const [currentTimeInMin, setCurrentTimeInMin] = useState(0);
  const [mediaDurationInSec, setMediaDurationInSec] = useState(0);
  const [mediaDurationInMin, setMediaDurationInMin] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [mediaDuration, setMediaDuration] = useState(0);
  const [isFullScreen, setFullScreen] = useState(false);
  const [seekBeforeWidth, setSeekBeforeWidth] = useState<number>(0);
  const [bufferedRange, setBufferRange] = useState<any>(0);
  const [loading, setLoading] = useState(true);

  const video = document.querySelector(
    `video#${mediaId}-preview`
  ) as HTMLVideoElement;

  const togglePlay = () => {
    if (!isFullScreen && video) {
      setFullScreen(true);
      video.play();
      const video_elements = document.getElementsByTagName("video");
      for (let i = 0; i < video_elements.length; i++) {
        let video_element = video_elements[i];
        if (video_element.id !== mediaId) {
          video_element.pause();
        }
      }

      const audio_elements = document.getElementsByTagName("audio");
      for (let i = 0; i < audio_elements.length; i++) {
        let audio_element = audio_elements[i];
        audio_element.pause();
      }
      return;
    }
    if (video && mediaDuration) {
      // video
      if (video?.paused) {
        video?.play();
        setPlaying(true);
      } else {
        video?.pause();
        setPlaying(false);
      }
    }
  };

  const changeProgressBar = (e: any) => {
    let { value } = e.target;
    if (video) {
      setCurrentTime(value / 1000);
      video.currentTime = value / 1000;
    }
  };

  const fullScreenToggle = () => {
    if (video) {
      setFullScreen(!isFullScreen);
      video?.requestFullscreen();
    }
  };

  useEffect(() => {
    setSeekBeforeWidth((currentTime / mediaDuration) * 100);
  }, [currentTime]);

  useEffect(() => {
    if (video) {
      video.onerror = () => {
        setLoading(false);
      };
      video.onloadeddata = () => {
        setCurrentTimeInSec(video?.currentTime % 60);
        setCurrentTimeInMin((video?.currentTime / 60) % 60);
        setMediaDurationInSec(video?.duration % 60);
        setMediaDurationInMin((video?.duration / 60) % 60);
        setMediaDuration(video?.duration);
        setCurrentTime(video?.currentTime);
        setLoading(false);
      };
      video.ontimeupdate = () => {
        if (video && video?.currentTime) {
          setCurrentTimeInSec(video?.currentTime % 60);
          setCurrentTimeInMin((video?.currentTime / 60) % 60);
          setCurrentTime(video?.currentTime);
          setSeekBeforeWidth((video.currentTime / video.duration) * 100);
        }
        if (video && video?.duration) {
          setMediaDurationInSec(video?.duration % 60);
          setMediaDurationInMin((video?.duration / 60) % 60);
          setMediaDuration(video?.duration);
        }
      };
      video.onended = () => {
        setCurrentTime(0);
        setCurrentTimeInSec(0);
        setCurrentTimeInMin(0);
        setSeekBeforeWidth(0);
        setBufferRange(0);
        setPlaying(false);
      };
    }
  }, [isPlaying, video]);

  useEffect(() => {
    if (video) {
      if (video?.played) {
        setPlaying(true);
      }
      if (video?.paused) {
        setPlaying(false);
      }
    }
  }, [video?.played, video?.paused, isFullScreen]);

  useEffect(() => {
    if (!isFullScreen && video) {
      setPlaying(false);
      video.pause();
      return;
    } else if (isFullScreen && video) {
      video.play();
    }
  }, [isFullScreen]);

  const style = {
    "--sarufi-video-seek-before-width": seekBeforeWidth + "%",
    "--sarufi-video-buffer-before-width":
      (bufferedRange / mediaDuration) * 100 + "%",
    "--sarufi-font-family":
      fontFamily === "InterRegular"
        ? "'Inter', sans-serif"
        : fontFamily === "PoppinsRegular"
        ? "'Poppins', sans-serif"
        : fontFamily === "inherit"
        ? "inherit"
        : "'Inter', sans-serif",
    "--sarufi-font-size": fontSize,
  } as CSSProperties;

  const Controllers = ({
    showBottomControllers,
  }: {
    showBottomControllers?: boolean;
  }) => {
    return (
      <>
        {video?.duration && !video?.error?.code && !loading ? (
          <div
            className={`${styles["sarufi-video-controls"]}`}
            onClick={() => {
              if (!isFullScreen) {
                togglePlay();
              }
            }}
            style={{
              height: isFullScreen ? "50px" : "100%",
              position: isFullScreen ? "relative" : "absolute",
              ...(!isFullScreen
                ? {
                    top: 0,
                    left: 0,
                    cursor: "pointer",
                  }
                : {
                    backgroundColor: "rgba(0, 0, 0, .6)",
                  }),
            }}
          >
            {!showBottomControllers && (
              <div
                className={`${styles["sarufi-center-controls"]} ${
                  !isPlaying ? styles["sarufi-video-not-playing"] : ""
                }`}
              >
                <>
                  <button
                    title={isPlaying ? "Pause" : "Play"}
                    style={{
                      background: "rgba(11,20,26,.35)",
                      border: "none",
                      color: "white",
                      borderRadius: "50%",
                      height: "30px",
                      width: "30px",
                      cursor: "pointer",
                    }}
                    onClick={togglePlay}
                    className="sarufi-flex-center"
                  >
                    {!isPlaying ? <Play size={20} /> : <Pause size={20} />}
                  </button>
                </>
              </div>
            )}
            {showBottomControllers && (
              <div className={`${styles["sarufi-video-more-controls"]}`}>
                <div className={`${styles["sarufi-more-controls-container"]}`}>
                  <div
                    className="sarufi-flex-wide"
                    style={{
                      padding: "0 .5rem",
                    }}
                  >
                    <div
                      className={`${styles["sarufi-video-time-controls"]} sarufi-flex-start`}
                    >
                      <button
                        title={isPlaying ? "Pause" : "Play"}
                        style={{
                          background: "rgba(11,20,26,.35)",
                          border: "none",
                          color: "white",
                          borderRadius: "50%",
                          height: "30px",
                          width: "30px",
                          cursor: "pointer",
                        }}
                        onClick={togglePlay}
                        className="sarufi-flex-center"
                      >
                        {!isPlaying ? <Play size={14} /> : <Pause size={14} />}
                      </button>
                      <span>
                        {currentTimeInMin < 10
                          ? `0${Math.floor(currentTimeInMin)}`
                          : Math.floor(currentTimeInMin)}
                      </span>
                      &nbsp;:&nbsp;
                      <span>
                        {currentTimeInSec < 10
                          ? `0${Math.floor(currentTimeInSec)}`
                          : `${Math.floor(currentTimeInSec)}`}
                      </span>
                      &nbsp;/&nbsp;
                      <span>
                        {mediaDurationInMin < 10
                          ? `0${Math.floor(mediaDurationInMin)}`
                          : Math.floor(mediaDurationInMin)}
                      </span>
                      &nbsp;:&nbsp;
                      <span>
                        {mediaDurationInSec < 10
                          ? `0${Math.floor(mediaDurationInSec)}`
                          : `${Math.floor(mediaDurationInSec)}`}
                      </span>
                    </div>

                    <button
                      className={`${styles["sarufi-video-full-screen-toggle"]}`}
                      onClick={fullScreenToggle}
                      style={{
                        cursor: "pointer",
                        background: "none",
                        border: "none",
                        color: "currentcolor",
                      }}
                    >
                      <FullSCreen size={16} />
                    </button>
                  </div>
                  <div
                    style={{ ...style }}
                    className={`${styles["sarufi-bar"]} ${styles["sarufi-duration__bar"]}`}
                  >
                    <input
                      type="range"
                      id="progress"
                      disabled={!mediaDuration}
                      step={0.0001}
                      value={currentTime && currentTime * 1000}
                      max={mediaDuration && mediaDuration * 1000}
                      onChange={changeProgressBar}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </>
    );
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            background:
              mode === "dark" ? "rgba(255, 255, 255, .1)" : "rgba(0,0,0,.1)",
            borderRadius: ".3rem",
            padding: ".5rem",
            fontSize: 14,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ChatLoader />
        </div>
      ) : null}
      <div
        className={`${styles["sarufi-video-player"]}`}
        style={{
          ...style,
        }}
      >
        {
          <video
            key={url}
            id={mediaId}
            disablePictureInPicture
            controlsList="nodownload"
            src={url}
            onContextMenu={(e) => {
              e.preventDefault();
            }}
            style={{
              maxWidth: "100%",
              height:
                loading || !video?.duration || video?.error?.code || !video
                  ? "0"
                  : "auto",
              display:
                loading || !video?.duration || video?.error?.code || !video
                  ? "none"
                  : "block",
              width: "100%",
              objectFit: "cover",
              borderRadius: ".3rem",
            }}
          >
            <source src={url} type={"video/mp4"} />
            <span>Your Browser does not support this video format</span>
          </video>
        }
        {video?.duration ? <Controllers showBottomControllers={false} /> : null}
        <Modal
          mode={mode ?? "light"}
          open={isFullScreen}
          close={() => setFullScreen(false)}
          closeWithBackdrop
        >
          <div
            className={`${styles["sarufi-video-player"]}`}
            style={{
              maxWidth: "calc( 100vw - 150px )",
              maxHeight: "calc( 100vh - 200px )",
              width: "100%",
              height:
                loading || !video?.duration || video?.error?.code || !video
                  ? "0"
                  : "auto",
              ...style,
            }}
          >
            <video
              key={url}
              id={mediaId + "-preview"}
              disablePictureInPicture
              controlsList="nodownload"
              src={url}
              onContextMenu={(e) => {
                e.preventDefault();
              }}
              onClick={togglePlay}
              style={{
                maxWidth: "calc( 100vw - 150px )",
                maxHeight: "calc( 100vh - 200px )",
                width: "100%",
                height:
                  loading || !video?.duration || video?.error?.code || !video
                    ? "0"
                    : "auto",
                objectFit: "cover",
                display: "block",
              }}
            >
              <source src={url} type={"video/mp4"} />
              <span>Your Browser does not support this video format</span>
            </video>
            <Controllers showBottomControllers />
            <div className="sarufi-flex-center">
              <div
                style={{
                  textAlign: "center",
                  fontFamily:
                    fontFamily === "InterRegular"
                      ? "'Inter', sans-serif"
                      : fontFamily === "PoppinsRegular"
                      ? "'Poppins', sans-serif"
                      : fontFamily === "inherit"
                      ? "inherit"
                      : "'Inter', sans-serif",
                  fontSize: fontSize,
                  color: "white",
                  marginTop: ".3rem",
                }}
              >
                {caption}
              </div>
            </div>
          </div>
        </Modal>
      </div>

      {video?.error && !video?.duration && !loading && (
        <div
          style={{
            color: mode === "dark" ? "#e76262" : "red",
            background:
              mode === "dark" ? "rgba(255, 255, 255, .1)" : "rgba(0,0,0,.1)",
            borderRadius: ".3rem",
            padding: ".5rem",
            fontSize: 14,
          }}
        >
          {video?.error?.code === 1
            ? "Loading video resorces was aborted"
            : video?.error?.code === 2
            ? "Failed to play video due to network error"
            : video?.error?.code === 3
            ? "Failed to decode video resorces"
            : video?.error?.code === 4
            ? "Video resources not supported"
            : "Failed to load video resources"}
        </div>
      )}
    </>
  );
};

export default VideoPreview;
