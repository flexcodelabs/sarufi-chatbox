import React, { CSSProperties, useEffect, useState } from "react";
import { FullSCreen, Pause, Play } from "../assets/icons";
import styles from "./media.module.css";

const VideoPreview = ({
  url,
  caption,
  isFullScreen,
  openFullScreen,
  fontFamily,
  fontSize,
  index,
  messageIndex,
}: {
  url: string;
  caption: string;
  openFullScreen: () => void;
  isFullScreen: boolean;
  fontFamily: string;
  fontSize: string | number;
  index: number;
  messageIndex: number;
}) => {
  const [isPlaying, setPlaying] = useState(false);
  const [currentTimeInSec, setCurrentTimeInSec] = useState(0);
  const [currentTimeInMin, setCurrentTimeInMin] = useState(0);
  const [mediaDurationInSec, setMediaDurationInSec] = useState(0);
  const [mediaDurationInMin, setMediaDurationInMin] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [mediaDuration, setMediaDuration] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [seekBeforeWidth, setSeekBeforeWidth] = useState<number>(0);
  const [bufferedRange, setBufferRange] = useState<any>(0);
  const [loading, setLoading] = useState(true);

  const video = document.querySelector(
    `video#sarufi-video-player-${messageIndex}-${index}`
  ) as HTMLVideoElement;

  const togglePlay = () => {
    if (!isFullScreen && video) {
      openFullScreen();
      video.play();
      const video_elements = document.getElementsByTagName("video")
        for(let i=0; i < video_elements.length; i++) {
          let video_element = video_elements[i];
          if (video_element.id !== `sarufi-video-player-${messageIndex}-${index}`) {
            video_element.pause();
          }
        }

        const audio_elements = document.getElementsByTagName("audio")
        for(let i=0; i < audio_elements.length; i++) {
          let audio_element = audio_elements[i];
          audio_element.pause()
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
      setFullScreen(!fullScreen);
      video?.requestFullscreen();
    }
  };

  useEffect(() => {
    setSeekBeforeWidth((currentTime / mediaDuration) * 100);
  }, [currentTime]);

  useEffect(() => {
    if (video) {
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
          setSeekBeforeWidth((currentTime / mediaDuration) * 100);
        }
        if (video && video?.duration) {
          setMediaDurationInSec(video?.duration % 60);
          setMediaDurationInMin((video?.duration / 60) % 60);
          setMediaDuration(video?.duration);
          // setBufferRange(video?.buffered?.end(video?.buffered?.length - 1));
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

  return (
    <>
      <div
        className={`${styles["sarufi-video-player"]}`}
        style={{
          ...style,
        }}
      >
        <video
          key={url}
          id={`sarufi-video-player-${messageIndex}-${index}`}
          disablePictureInPicture
          controlsList="nodownload"
          onLoad={() => {
            setLoading(false);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
          }}
          style={{
            maxWidth: isFullScreen ? "calc( 100vw - 150px )" : "100%",
            maxHeight: isFullScreen ? "calc( 100vh - 200px )" : "auto",
            width: "100%",
            objectFit: "cover",
            borderRadius: isFullScreen ? 0 : ".3rem",
          }}
        >
          <source src={url} type={"video/mp4"} />
          <span>Your Browser does not support this video format</span>
        </video>
        {
          <div
            className={`${styles["sarufi-video-controls"]}`}
            onClick={togglePlay}
          >
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
                    height: "50px",
                    width: "50px",
                    cursor: "pointer",
                  }}
                  className="sarufi-flex-center"
                >
                  {!isPlaying ? <Play size={20} /> : <Pause size={20} />}
                </button>
              </>
            </div>
            {isFullScreen && video?.duration > 0 && (
              <div
                className={`${styles["sarufi-video-more-controls"]} ${
                  !isPlaying ? styles["sarufi-video-not-playing"] : ""
                }`}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className={`${styles["sarufi-more-controls-container"]}`}
                >
                  <div className="sarufi-flex-wide" style={{
                    padding: "0 .5rem",
                  }}>
                    <div
                      className={`${styles["sarufi-video-time-controls"]}`}
                      style={{
                        fontSize: Number(fontSize) * 0.9,
                        
                      }}
                    >
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
                      }}
                    >
                      <FullSCreen size={16} />
                    </button>
                  </div>
                  <div
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
        }
      </div>
      {isFullScreen && (
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
            }}
          >
            {caption}
          </div>
        </div>
      )}

      {!video?.duration && !loading && (
        <div
          style={{
            marginTop: "2rem",
            color: "red",
            fontSize: "1.2rem",
          }}
        >
          Failed to load video resources
        </div>
      )}
    </>
  );
};

export default VideoPreview;
