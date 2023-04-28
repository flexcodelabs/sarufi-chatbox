import React, { CSSProperties, useEffect, useState } from "react";
import { Pause, Play } from "../assets/icons";
import ChatLoader from "./chat-loader";

const AudioPreview = ({
  url,
  fontSize,
  mediaId,
  mode,
}: {
  url: string;
  mediaId: string;
  fontSize: number | string;
  mode?: "dark" | "light";
}) => {
  const [isPlaying, setPlaying] = useState(false);
  const [currentTimeInSec, setCurrentTimeInSec] = useState<number>(0);
  const [currentTimeInMin, setCurrentTimeInMin] = useState<any>(0);
  const [bufferedRange, setBufferRange] = useState<any>(0);
  const [mediaDurationInSec, setmediaDurationInSec] = useState<number>(0);
  const [mediaDurationInMin, setmediaDurationInMin] = useState<any>(0);
  const [currentTime, setCurrentTime] = useState<any>(0);
  const [mediaDuration, setmediaDuration] = useState<any>(0);
  const [isBuffering, setBuffering] = useState<any>(false);
  const [seekBeforeWidth, setSeekBeforeWidth] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const audio = document.querySelector(`audio#${mediaId}`) as HTMLAudioElement;

  const togglePlay = () => {
    if (audio && mediaDuration) {
      // audio
      if (audio.paused) {
        audio.play();
        setPlaying(true);
        const audio_elements = document.getElementsByTagName("audio");
        for (let i = 0; i < audio_elements.length; i++) {
          let audio_element = audio_elements[i];
          if (audio_element.id !== mediaId) {
            audio_element.pause();
          }
        }

        const video_elements = document.getElementsByTagName("video");
        for (let i = 0; i < video_elements.length; i++) {
          let video_element = video_elements[i];
          video_element.pause();
        }
      } else {
        audio.pause();
        setPlaying(false);
      }
    }
  };

  const changeProgressBar = (e: any) => {
    let { value } = e.target;
    setCurrentTime(value / 1000);
    if (audio && mediaDuration) {
      audio.currentTime = value / 1000;
    }
  };

  useEffect(() => {
    setSeekBeforeWidth((currentTime / mediaDuration) * 100);
  }, [currentTime]);

  useEffect(() => {
    if (audio) {
      audio.onwaiting = () => {
        setBuffering(true);
      };
      audio.onplaying = () => {
        setBuffering(false);
      };
      audio.onerror = () => {
        setLoading(false);
      };

      audio.onloadeddata = () => {
        setCurrentTimeInSec(audio.currentTime % 60);
        setCurrentTimeInMin((audio.currentTime / 60) % 60);
        setmediaDurationInSec(audio.duration % 60);
        setmediaDurationInMin((audio.duration / 60) % 60);
        setmediaDuration(audio.duration);
        setCurrentTime(audio.currentTime);
        setLoading(false);
        setBuffering(false);
      };
      audio.ontimeupdate = () => {
        if (audio && audio.currentTime) {
          setCurrentTimeInSec(audio.currentTime % 60);
          setCurrentTimeInMin((audio.currentTime / 60) % 60);
          setCurrentTime(audio.currentTime);
          setSeekBeforeWidth((currentTime / mediaDuration) * 100);
        }
        if (audio && audio.duration) {
          setmediaDurationInSec(audio?.duration % 60);
          setmediaDurationInMin((audio?.duration / 60) % 60);
          setmediaDuration(audio.duration);
          setBufferRange(audio?.buffered?.end(audio?.buffered?.length - 1));
        }
      };
      audio.onended = () => {
        setCurrentTime(0);
        setCurrentTimeInSec(0);
        setCurrentTimeInMin(0);
        setSeekBeforeWidth(0);
        setBufferRange(0);
        setPlaying(false);
      };
    }
  }, [isPlaying, audio]);

  useEffect(() => {
    if (audio) {
      if (audio.played) {
        setPlaying(true);
      }
      if (audio.paused) {
        setPlaying(false);
      }
    }
  }, [audio?.played, audio?.paused]);

  const style = {
    "--sarufi-audio-seek-before-width": seekBeforeWidth + "%",
    "--sarufi-audio-buffer-before-width":
      (bufferedRange / mediaDuration) * 100 + "%",
  } as CSSProperties;

  return (
    <>
      {loading ? (
        <div
          style={{
            padding: ".5rem",
            fontSize: 14,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ChatLoader />
        </div>
      ) : null}
      {audio?.duration && !audio?.error?.code && !loading ? (
        <div
          style={{
            ...style,
          }}
          className={`sarufi-audio-player`}
        >
          <div
            style={{
              margin: ".5rem 0 .5rem",
              width: "100%",
            }}
            className={`sarufi-flex-start`}
          >
            <button
              className="sarufi-flex-start sarufi-button"
              onClick={togglePlay}
              style={{
                background: "none",
                border: "none",
                height: "40px",
                width: "40px",
                color: "var(--sarufi-sent-boxt-color)",
                cursor: "pointer",
              }}
              accessKey="Space"
              type="button"
            >
              <span title={isPlaying ? "Pause" : "Play"}>
                {isBuffering ? (
                  <>
                    <ChatLoader fromPlay />
                  </>
                ) : (
                  <>{!isPlaying ? <Play /> : <Pause />}</>
                )}
              </span>
            </button>
            <div
              style={{
                width: "calc( 100% - 50px )",
              }}
            >
              <div className={`sarufi-bar sarufi-duration__bar`}>
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

              {mediaDuration > 0 && (
                <div
                  className={``}
                  style={{
                    fontSize: Number(fontSize) * 0.8,
                  }}
                >
                  <div className={`sarufi-flex-wide sarufi-duration`}>
                    {isPlaying && (
                      <div>
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
                      </div>
                    )}
                    {!isPlaying && (
                      <div>
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
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
      {audio?.error && !audio?.duration && !loading && (
        <div
          style={{
            color: mode === "dark" ? "#e76262" : "red",
            borderRadius: ".3rem",
            padding: ".3rem 0",
            fontSize: 14,
          }}
        >
          {audio?.error?.code === 1
            ? "Loading audio resorces was aborted"
            : audio?.error?.code === 2
            ? "Failed to play audio due to network error"
            : audio?.error?.code === 3
            ? "Failed to decode audio resorces"
            : audio?.error?.code === 4
            ? "Audio resources not supported"
            : "Failed to load audio resources"}
        </div>
      )}
      <audio
        key={url}
        id={mediaId}
        src={url ?? ""}
        style={{
          display: "none",
        }}
      />
    </>
  );
};

export default AudioPreview;
