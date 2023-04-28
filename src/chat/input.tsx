import React, { FC, ChangeEvent, useState } from "react";

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
  mode: "dark" | "light";
  primaryColor: string;
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
  mode,
  primaryColor,
}) => {
  const onEnterPress = (e: any) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      save && e.preventDefault();
      save && save(e);
    }
  };
  const [isFocused, setFocused] = useState(true);

  return (
    <div
      className={`sarufi-field-group`}
      style={{
        marginBottom: "1.5rem",
      }}
    >
      <div
        className={`input-group`}
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
            className={`scroll-bar sarufi-textarea`}
            onChange={onChange}
            autoComplete={autoComplete}
            value={value}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              padding: ".7rem .7rem",
              paddingRight: 45,
              height: 60,
              minHeight: 60,
              maxHeight: 60,
              borderRadius: "0.3rem",
              fontFamily: "var(--sarufi-font-family)",
              ...(mode === "dark"
                ? {
                    color: "white",
                  }
                : {}),
              ...(mode === "dark" && isFocused
                ? {
                    borderColor: primaryColor,
                  }
                : {}),
            }}
            required={required}
          />
        </label>
      </div>
    </div>
  );
};

export default Input;
