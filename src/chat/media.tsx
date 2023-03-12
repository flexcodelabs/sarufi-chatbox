import React from "react";
import MediaPreview from "./media-preview";

const Media = ({
  chat,
  mode,
  fontFamily,
  fontSize,
  messageIndex,
}: {
  chat: any;
  mode: "dark" | "light";
  fontFamily: string;
  fontSize: string | number;
  messageIndex: number;
}) => {
  return (
    <>
      {chat?.actions?.find((action: any) => action?.send_images) &&
        chat?.actions
          ?.find((action: any) => action?.send_images)
          ?.send_images?.map(
            (image: { link: string; caption?: string }, index: number) => (
              <MediaPreview
                url={image.link}
                caption={image?.caption ?? ""}
                type="images"
                key={index}
                mode={mode}
                fontFamily={fontFamily}
                fontSize={fontSize}
                index={index}
                messageIndex={messageIndex}
              />
            )
          )}

      {chat?.actions?.find((action: any) => action?.send_stickers) &&
        chat?.actions
          ?.find((action: any) => action?.send_stickers)
          ?.send_stickers?.map(
            (sticker: { link: string; caption?: string }, index: number) => (
              <MediaPreview
                url={sticker.link}
                caption={sticker?.caption ?? ""}
                type="stickers"
                key={index}
                mode={mode}
                fontFamily={fontFamily}
                fontSize={fontSize}
                index={index}
                messageIndex={messageIndex}
              />
            )
          )}
      {chat?.actions?.find((action: any) => action?.send_videos) &&
        chat?.actions
          ?.find((action: any) => action?.send_videos)
          ?.send_videos?.map(
            (video: { link: string; caption?: string }, index: number) => (
              <MediaPreview
                url={video.link}
                caption={video?.caption ?? ""}
                type="videos"
                key={index}
                mode={mode}
                fontFamily={fontFamily}
                fontSize={fontSize}
                index={index}
                messageIndex={messageIndex}
              />
            )
          )}
      {chat?.actions?.find((action: any) => action?.send_audios) &&
        chat?.actions
          ?.find((action: any) => action?.send_audios)
          ?.send_audios?.map(
            (audio: { link: string; caption?: string }, index: number) => (
              <MediaPreview
                url={audio.link}
                caption={audio?.caption ?? ""}
                type="audios"
                key={index}
                mode={mode}
                fontFamily={fontFamily}
                fontSize={fontSize}
                index={index}
                messageIndex={messageIndex}
              />
            )
          )}
      {chat?.actions?.find((action: any) => action?.send_documents) &&
        chat?.actions
          ?.find((action: any) => action?.send_documents)
          ?.send_documents?.map(
            (document: { link: string; caption?: string }, index: number) => (
              <MediaPreview
                url={document.link}
                caption={document?.caption ?? ""}
                type="documents"
                key={index}
                mode={mode}
                fontFamily={fontFamily}
                fontSize={fontSize}
                index={index}
                messageIndex={messageIndex}
              />
            )
          )}

      {chat?.actions?.find((action: any) => action?.send_location) &&
        chat?.actions
          ?.find((action: any) => action?.send_location)
          ?.send_location?.map(
            (
              location: {
                latitude: string;
                longitude: string;
                name: string;
                address: string;
              },
              index: number
            ) => (
              <div
                key={index}
                style={{
                  fontSize: "calc(var(--sarufi-font-size) * 0.9 )",
                  marginBottom: ".7rem",
                  background:
                    mode === "dark"
                      ? "rgba(255, 255, 255, .1)"
                      : "rgba(0,0,0,.1)",
                  borderRadius: ".3rem",
                  padding: ".1rem .5rem",
                }}
              >
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
                          style={{
                            marginTop: ".2rem",
                          }}
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
              </div>
            )
          )}
    </>
  );
};

export default Media;
