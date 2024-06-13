import React, { CSSProperties, FC } from "react";

export interface IconProps {
  size?: number | string;
  className?: string;
  style?: CSSProperties;
}

export const Attachment: FC<IconProps> = ({ size, style, className }) => (
  <svg
    width={size ?? 24}
    height={size ?? 24}
    viewBox="0 0 13 14"
    fill="none"
    className={className}
    style={style}
  >
    <path
      d="M3.15433 7L2.31791 6.16358C1.39403 5.2397 1.39403 3.74179 2.31791 2.81791C3.24179 1.89403 4.7397 1.89403 5.66358 2.81791L10.6821 7.83642C11.606 8.7603 11.606 10.2582 10.6821 11.1821C9.75821 12.106 8.2603 12.106 7.33642 11.1821L5.45448 9.30015C4.87705 8.72272 4.87705 7.78653 5.45448 7.2091C6.0319 6.63168 6.9681 6.63168 7.54552 7.2091L8.59104 8.25463"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Calendar: FC<IconProps> = ({ size, style, className }) => (
  <svg
    width={size ?? 24}
    height={size ?? 24}
    viewBox="0 0 13 14"
    fill="none"
    className={className}
    style={style}
  >
    <path
      d="M10.8331 2.5998H9.0998V1.7998H8.23314V2.5998H4.76647V1.7998H3.8998V2.5998H2.16647C1.6898 2.5998 1.2998 2.9598 1.2998 3.3998V11.3998C1.2998 11.8398 1.6898 12.1998 2.16647 12.1998H10.8331C11.3098 12.1998 11.6998 11.8398 11.6998 11.3998V3.3998C11.6998 2.9598 11.3098 2.5998 10.8331 2.5998ZM10.8331 11.3998H2.16647V5.7998H10.8331V11.3998ZM10.8331 4.9998H2.16647V3.3998H3.8998V4.1998H4.76647V3.3998H8.23314V4.1998H9.0998V3.3998H10.8331V4.9998Z"
      fill="currentColor"
    />
  </svg>
);

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
      width={size ?? 24}
      height={size ?? 24}
      className={className}
      style={style}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M0.649965 0.000468815C0.542544 0.00447137 0.437632 0.0340679 0.343957 0.0867961C0.250282 0.139524 0.170552 0.213859 0.111401 0.303617C0.0522503 0.393375 0.0153887 0.495961 0.00388277 0.602839C-0.00762314 0.709717 0.00655937 0.817797 0.0452505 0.918088L2.52036 7.3089C2.56296 7.41854 2.63346 7.51514 2.72488 7.58914C2.81631 7.66314 2.92547 7.71197 3.04158 7.7308L9.76551 8.82245C9.93302 8.84961 9.91669 8.89797 9.91669 9C9.91669 9.10202 9.93302 9.15038 9.76551 9.17754L3.04158 10.2692C2.92547 10.288 2.81631 10.3368 2.72488 10.4109C2.63346 10.4849 2.56296 10.5815 2.52036 10.6911L0.0452505 17.0819C-0.00373964 17.2089 -0.0132051 17.3477 0.0180957 17.4802C0.0493965 17.6126 0.120002 17.7325 0.22065 17.8241C0.321298 17.9158 0.447288 17.9748 0.582093 17.9936C0.716899 18.0123 0.854223 17.9899 0.976054 17.9292L17.6268 9.60383C17.7389 9.54776 17.8333 9.46158 17.8992 9.35492C17.9651 9.24827 18 9.12537 18 9C18 8.87462 17.9651 8.75172 17.8992 8.64507C17.8333 8.53841 17.7389 8.45223 17.6268 8.39616L0.976054 0.0707845C0.874951 0.0204373 0.762832 -0.00373935 0.649965 0.000468815Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const MicIcon: FC<IconProps> = ({ size, className, style }) => (
  <svg
    width={size ?? 24}
    height={size ?? 24}
    viewBox="0 0 10 16"
    fill="none"
    className={className}
    style={style}
  >
    <path
      d="M5 0.496094C3.34911 0.496094 2.00003 1.84517 2.00003 3.49606V8.49601C2.00003 10.1469 3.34911 11.496 5 11.496C6.65089 11.496 7.99997 10.1469 7.99997 8.49601V3.49606C7.99997 1.84517 6.65089 0.496094 5 0.496094ZM5 1.49608C6.11042 1.49608 6.99998 2.38565 6.99998 3.49606V8.49601C6.99998 9.60643 6.11042 10.496 5 10.496C3.88959 10.496 3.00002 9.60643 3.00002 8.49601V3.49606C3.00002 2.38565 3.88959 1.49608 5 1.49608ZM0.492234 6.8222C0.35974 6.82427 0.233486 6.87885 0.141202 6.97394C0.0489181 7.06903 -0.00184911 7.19686 5.15062e-05 7.32936V8.49601C5.15062e-05 11.0828 1.97804 13.2187 4.50001 13.4706V14.9959C4.49907 15.0622 4.51131 15.128 4.53602 15.1895C4.56072 15.2509 4.5974 15.3069 4.64392 15.3541C4.69045 15.4013 4.74588 15.4387 4.80701 15.4643C4.86814 15.4899 4.93374 15.5031 5 15.5031C5.06626 15.5031 5.13186 15.4899 5.19299 15.4643C5.25412 15.4387 5.30956 15.4013 5.35608 15.3541C5.4026 15.3069 5.43928 15.2509 5.46399 15.1895C5.48869 15.128 5.50093 15.0622 5.5 14.9959V13.4706C8.02196 13.2187 9.99995 11.0828 9.99995 8.49601V7.32936C10.0009 7.2631 9.98865 7.19732 9.96394 7.13584C9.93923 7.07435 9.90255 7.01839 9.85603 6.97121C9.80951 6.92403 9.75407 6.88656 9.69295 6.86098C9.63182 6.83541 9.56622 6.82224 9.49996 6.82224C9.43369 6.82224 9.36809 6.83541 9.30696 6.86098C9.24584 6.88656 9.1904 6.92403 9.14388 6.97121C9.09736 7.01839 9.06068 7.07435 9.03597 7.13584C9.01126 7.19732 8.99902 7.2631 8.99996 7.32936V8.49601C8.99996 10.6911 7.24654 12.4609 5.05925 12.4927C5.03701 12.4899 5.0146 12.4886 4.99219 12.4888C4.9739 12.4891 4.95565 12.4904 4.9375 12.4927C2.75173 12.4592 1.00004 10.69 1.00004 8.49601V7.32936C1.001 7.26244 0.988517 7.196 0.963329 7.134C0.938141 7.07199 0.900762 7.01567 0.853406 6.96837C0.806051 6.92108 0.749682 6.88377 0.687642 6.85866C0.625603 6.83355 0.559154 6.82116 0.492234 6.8222Z"
      fill="currentColor"
    />
  </svg>
);

export const MinusIcon: FC<IconProps> = ({ size, className, style }) => (
  <svg
    width={size ?? 16}
    height={size ?? 2}
    className={className}
    style={style}
    viewBox="0 0 16 2"
    fill="none"
  >
    <rect
      x="0.799805"
      y="0.0996094"
      width="14.4"
      height="1.8"
      fill="currentColor"
    />
  </svg>
);

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
