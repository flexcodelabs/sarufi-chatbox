import React, { FC } from "react";

interface Props {
  label?: any;
  onClick?: () => any;
  disabled?: boolean;
}

const Button: FC<Props> = ({ label, onClick, disabled }) => {
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
        padding: ".7rem 1rem",
        position: "absolute",
        overflow: "hidden",
        transition: ".3s linear",
        zIndex: 100001,
        right: "1.5rem",
        border: "none",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
