import React, { useRef, useState } from "react";

// Local imports
import {
  CancelRecordIcon,
  MicIcon,
  Pause,
  Play,
  RecordingAudioIcon,
  SendIcon,
} from "../../assets/icons";

interface RecordAudioProps {
  maxSize?: number;
  readFile: (
    file: File,
    blob: string,
    error: string,
    fileBuffer: ArrayBuffer
  ) => void;
  disabled?: boolean;
  saveIsRecording: (isRecording: boolean) => void;
}

const RecordAudio = ({
  maxSize = 5 * 1024 * 1024,
  readFile,
  disabled,
  saveIsRecording,
}: RecordAudioProps) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingDuration, setRecordingDuration] = useState<number>(0);
  const [currentPlayingTime, setCurrentPlayingTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [recordedAudio, setRecordedAudio] = useState<{
    file: File | null;
    blob: string;
    error: string;
    fileBuffer: ArrayBuffer | null;
  }>({
    file: null,
    blob: "",
    error: "",
    fileBuffer: null,
  });

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const intervalRef = useRef<number | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  const generateRandomFileName = (): string => {
    const randomString = Math.random().toString(36).substring(2, 8);
    return `recorded_audio_${randomString}.wav`;
  };

  const handleStartRecording = async () => {
    try {
      if (!navigator?.mediaDevices) {
        throw new Error("Media not supported");
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: "audio/wav" });
        const blob = URL.createObjectURL(audioBlob);
        const file = new File([audioBlob], generateRandomFileName(), {
          type: "audio/wav",
        });
        const error = file.size > maxSize ? "File size exceeds 5 MB" : "";
        // read file first
        const reader = new FileReader();

        reader.onload = () => {
          setRecordedAudio({
            file,
            blob,
            error,
            fileBuffer: reader.result as ArrayBuffer,
          });
        };

        reader.readAsArrayBuffer(file);
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);
      saveIsRecording(true);
      intervalRef.current = window.setInterval(() => {
        setRecordingDuration((prevDuration) => prevDuration + 1);
      }, 1000);
    } catch (error: any) {
      console.error(error);
      setRecordedAudio({
        file: null,
        blob: "",
        error: "Failed to record audio",
        fileBuffer: null,
      });
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current = null;
      clearInterval(intervalRef.current!);
      chunksRef.current = [];
      setIsPlaying(false);
      setCurrentPlayingTime(0);
      setIsRecording(false);
      window.clearInterval(intervalRef.current!);
    }
  };

  const submit = () => {
    if (recordedAudio?.file && recordedAudio?.fileBuffer) {
      if (recordedAudio?.error) {
        return;
      }
      readFile(
        recordedAudio?.file,
        recordedAudio?.blob,
        recordedAudio?.error,
        recordedAudio?.fileBuffer
      );
      setRecordedAudio({
        file: null,
        blob: "",
        error: "",
        fileBuffer: null,
      });
      setRecordingDuration(0);
      saveIsRecording(false);
    }
  };

  const formatDuration = (seconds: number): string => {
    seconds = Math.floor(seconds); // Ensure we're working with whole seconds
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    if (audioPlayerRef.current) {
      if (isPlaying) {
        audioPlayerRef.current.pause();
      } else {
        audioPlayerRef.current.play();
      }
      setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
    setCurrentPlayingTime(0);
  };

  const handleTimeUpdate = () => {
    if (audioPlayerRef.current) {
      setCurrentPlayingTime(audioPlayerRef.current.currentTime);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
        display: "flex",
        width: isRecording || recordedAudio?.blob ? "100%" : "auto",
      }}
    >
      {!isRecording && !recordedAudio?.blob && (
        <button
          title="Record Audio"
          onClick={handleStartRecording}
          disabled={isRecording || disabled}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <MicIcon size={20} />
          {/* <p className="link text-center">Record Now</p> */}
        </button>
      )}
      {(isRecording || recordedAudio?.blob) && (
        <button
          onClick={() => {
            if (recordedAudio.blob) {
              // URL.revokeObjectURL(recordedAudio.blob);
            } else handleStopRecording();
          }}
          disabled={!isRecording || disabled}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <CancelRecordIcon size={24} />
          {/* <p className="link text-center">Stop Recording</p> */}
        </button>
      )}
      {isRecording && !recordedAudio?.blob && (
        <div
          style={{
            // position: "absolute",
            right: "1rem",
            bottom: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <RecordingAudioIcon size={18} />
          <span>{formatDuration(recordingDuration)}</span>
        </div>
      )}

      {recordedAudio?.blob && (
        <div
          style={{
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <audio
              ref={audioPlayerRef}
              key={recordedAudio?.blob}
              onEnded={handleAudioEnd}
              onTimeUpdate={handleTimeUpdate}
              style={{
                display: "none",
              }}
            >
              <source src={recordedAudio?.blob} type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
            {/* preview and submit */}
            <div
              style={{
                marginRight: "1rem",
              }}
            >
              <button onClick={handlePlayPause}>
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
            </div>
            <p>
              {formatDuration(currentPlayingTime)} :{" "}
              {formatDuration(recordingDuration)}
            </p>
          </div>

          <button
            onClick={submit}
            disabled={!!recordedAudio?.error || disabled}
            style={{
              color: "var(--sarufi-primary-color)",
            }}
          >
            <SendIcon size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default RecordAudio;
