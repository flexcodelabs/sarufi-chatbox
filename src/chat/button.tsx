import React, { FC } from "react";

interface Props {
  label?: any;
  mode: "dark" | "light";
  onClick?: () => any;
  disabled?: boolean;
}

const Button: FC<Props> = ({ label, mode, onClick, disabled }) => {
  return (
    <button
      className={`sarufi-flex-center`}
      onClick={() => {
        if (!disabled) {
          onClick && onClick();
        }
      }}
      disabled={disabled ?? false}
      style={{
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.4 : 1,
        fontSize: ".9rem",
        overflow: "hidden",
        transition: ".3s linear",
        zIndex: 100001,
        border: "none",
        backgroundColor: "transparent",
        ...(mode === "dark"
          ? {
              color: "white",
            }
          : {}),
      }}
    >
      {label}
    </button>
  );
};

export default Button;
