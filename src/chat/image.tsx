import React, { CSSProperties } from "react";

const ImagePreview = ({
  url,
  caption,
  openFullScreen,
  isFullScreen,
  fontFamily,
  fontSize,
}: {
  url: string;
  caption: string;
  openFullScreen: () => void;
  isFullScreen: boolean;
  fontFamily: string;
  fontSize: string | number;
}) => {
  const style = {
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
    <div style={style}>
      <figure
        style={{
          marginInlineStart: 0,
          marginInlineEnd: 0,
          marginBlockStart: 0,
          marginBlockEnd: 0,
        }}
      >
        <picture
          className="sarufi-flex-start"
          onClick={openFullScreen}
          tabIndex={0}
        >
          <img
            src={url}
            alt="Preview Image"
            style={{
              borderRadius: ".3rem",
              ...(!isFullScreen
                ? {
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }
                : {
                    maxHeight: "calc( 100vh - 200px )",
                    maxWidth: "calc( 100vw - 150px )",
                    objectFit: "contain",
                  }),
            }}
          />
        </picture>

        {caption && isFullScreen && (
          <figcaption
            className={`${isFullScreen ? "sarufi-flex-center" : ""}`}
            style={{
              marginTop: ".5rem",
            }}
          >
            <span
              style={{
                textAlign: isFullScreen ? "center" : "left",
                color: "white",
              }}
            >
              {caption}
            </span>
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default ImagePreview;
