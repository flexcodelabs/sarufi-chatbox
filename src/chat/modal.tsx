import React, { FC, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { Close } from "../assets/icons";

interface Props {
  closeWithBackdrop?: boolean;
  close: () => any;
  children: any;
  open: boolean;
  mode: "dark" | "light";
}

const Modal: FC<Props> = ({
  closeWithBackdrop,
  close,
  open,
  children,
  mode,
}) => {
  useLayoutEffect(() => {
    if (open) {
      document.body.classList.add("sarufi-no-scrolling");
    } else {
      document.body.classList.remove("sarufi-no-scrolling");
    }
  }, [open]);

  return ReactDOM.createPortal(
    <div
      className={`sarufi-modal ${open ? "open" : ""}  sarufi-flex-center`}
      style={{
        zIndex: 200000,
      }}
    >
      {open && (
        <div
          className={`sarufi-modal-backdrop ${open ? "open" : ""}`}
          onClick={() => {
            if (closeWithBackdrop) close();
          }}
        />
      )}
      <div
        className={`sarufi-container ${open ? "open" : ""} sarufi-scroll-bar`}
        style={{
          color: mode === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)",
        }}
        onClick={() => {
          if (closeWithBackdrop) close();
        }}
      >
        <div
          className={`sarufi-flex-end`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "calc( 100% - 3rem )",
            height: "50px",
            padding: "1rem 2rem",
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
              close();
            }}
            title="Close"
            className="sarufi-cursor-pointer"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "rgba(255,255,255,.8)",
            }}
          >
            <Close />
          </button>
        </div>
        <div
          className="sarufi-flex-center"
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("sarufi-modal")!
  );
};

export default Modal;
