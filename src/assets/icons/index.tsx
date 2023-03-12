import React, { CSSProperties, FC } from "react";

interface IconProps {
  size?: number | string;
  className?: string;
  style?: CSSProperties;
}

// that x icon
export const Close: FC<IconProps> = ({ size, style, className }) => {
  return (
    <svg
      width={size ?? 24}
      height={size ?? 24}
      viewBox={`0 0 24 24`}
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M13.06 12l6.224-6.216a.76.76 0 00-1.069-1.068L12 10.94 5.784 4.716a.76.76 0 00-1.069 1.068L10.94 12l-6.225 6.216a.76.76 0 000 1.068.768.768 0 001.07 0L12 13.06l6.215 6.225a.768.768 0 001.07 0 .76.76 0 000-1.068L13.058 12z"
      />
    </svg>
  );
};

export const TextComponent: FC<IconProps> = ({ size, style, className }) => {
  return (
    <svg
      width={size ?? 24}
      height={size ?? 24}
      viewBox={`0 0 24 24`}
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.375 20.25H4.472a.712.712 0 01-.722-.722v-7.903A8.625 8.625 0 0112.375 3v0A8.625 8.625 0 0121 11.625v0a8.624 8.624 0 01-8.625 8.625v0zM9.375 10.5H15M9.375 13.5H15"
      />
    </svg>
  );
};

export const SendIcon: FC<IconProps> = ({ size, className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      enableBackground="new 0 0 128 128"
      height={size ?? 20}
      className={className}
      style={style}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 128 128"
      width={size ?? 20}
      xmlSpace="preserve"
    >
      <path
        fill="currentColor"
        d="M74.508,108.239c-0.772,0-1.479-0.445-1.81-1.148l-16.863-35.84L20.732,55.116c-0.734-0.337-1.193-1.083-1.164-1.891  c0.03-0.808,0.543-1.518,1.3-1.8l83.312-31.107c0.729-0.271,1.552-0.096,2.105,0.452c0.555,0.548,0.739,1.369,0.475,2.102  l-30.371,84.047c-0.274,0.761-0.98,1.28-1.788,1.318C74.569,108.238,74.538,108.239,74.508,108.239z M26.772,53.49l31.396,14.432  c0.429,0.197,0.774,0.539,0.975,0.965l15.122,32.139l27.264-75.448L26.772,53.49z"
      />
      <path
        fill="currentColor"
        d="M57.334,71.738c-0.512,0-1.023-0.195-1.414-0.586c-0.781-0.78-0.781-2.047,0-2.828l47.545-47.546  c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828L58.748,71.152C58.357,71.543,57.846,71.738,57.334,71.738z"
      />
    </svg>
  );
};

export const Pause: FC<IconProps> = ({ className, size }) => {
  return (
    <svg
      className={className}
      width={size ?? "7"}
      height={size ?? "14"}
      viewBox="0 0 7 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 14L1 -4.02383e-07" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.24615 14V1.26655e-06"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const Play: FC<IconProps> = ({ className, size }) => {
  return (
    <svg
      width={size ?? "12"}
      height={size ?? "16"}
      className={className}
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7391 6.92845C11.3389 7.31537 11.3519 8.18793 10.7639 8.59253L1.56691 14.9217C0.903442 15.3783 -5.96046e-08 14.9033 -5.96046e-08 14.0979L-5.96046e-08 1.83521C-5.96046e-08 1.04331 0.876694 0.565606 1.54212 0.994914L10.7391 6.92845Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const FullSCreen: FC<IconProps> = ({ className, size }) => {
  return (
    <svg
      width={size ?? "23"}
      height={size ?? "23"}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2 7V2h5m15 5V2h-5M7 22H2v-5m15 5h5v-5"
      ></path>
    </svg>
  );
};

export const DownloadIcon: FC<IconProps> = ({ className, size }) => {
  return (
    <svg
      viewBox="0 0 34 34"
      height={size ?? "34"}
      width={size ?? "34"}
      className={className}
      preserveAspectRatio="xMidYMid meet"
      version="1.1"
      x="0px"
      y="0px"
      enableBackground="new 0 0 34 34"
      xmlSpace="preserve"
    >
      <path
        fill="currentColor"
        d="M17,2c8.3,0,15,6.7,15,15s-6.7,15-15,15S2,25.3,2,17S8.7,2,17,2 M17,1C8.2,1,1,8.2,1,17 s7.2,16,16,16s16-7.2,16-16S25.8,1,17,1L17,1z"
      ></path>
      <path
        fill="currentColor"
        d="M22.4,17.5h-3.2v-6.8c0-0.4-0.3-0.7-0.7-0.7h-3.2c-0.4,0-0.7,0.3-0.7,0.7v6.8h-3.2 c-0.6,0-0.8,0.4-0.4,0.8l5,5.3c0.5,0.7,1,0.5,1.5,0l5-5.3C23.2,17.8,23,17.5,22.4,17.5z"
      ></path>
    </svg>
  );
};
