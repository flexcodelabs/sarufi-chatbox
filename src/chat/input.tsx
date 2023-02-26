import React, { FC, ChangeEvent } from "react";
import styles from "./chat.module.css";

interface Props {
  disabled?: boolean;
  autoComplete?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => any;
  value: string | number;
  placeholder?: string;
  name?: string;
  required?: boolean;
  maxLength?: number;
  autoFocus?: boolean;
  save?: (e?: any) => void;
}

const Input: FC<Props> = ({
  disabled,
  autoComplete = "",
  value,
  name,
  onChange,
  required,
  autoFocus = false,
  placeholder,
  maxLength = 1024,
  save,
}) => {
  const onEnterPress = (e: any) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      save && e.preventDefault();
      save && save(e);
    }
  };

  return (
    <div
      className={`${styles["sarufi-field-group"]}`}
      style={{
        marginBottom: "1.5rem",
      }}
    >
      <div
        className={`${styles["input-group"]}`}
        style={{
          position: "relative",
        }}
      >
        <label className="sarufi-flex-start" style={{}}>
          <textarea
            key={name}
            onKeyDown={onEnterPress}
            id={name}
            autoFocus={autoFocus}
            name={name}
            maxLength={maxLength}
            disabled={disabled}
            placeholder={placeholder}
            className={`scroll-bar`}
            onChange={onChange}
            autoComplete={autoComplete}
            value={value}
            style={{
              padding: ".7rem .7rem",
              paddingRight: 45,
              height: 60,
              borderRadius: "0.3rem",
            }}
            required={required}
          />
        </label>
      </div>
    </div>
  );
};

export default Input;
