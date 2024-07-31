declare module "*.module.css";

interface ThemeType {
  buttonSize?: "sm" | "md" | "lg";
  primaryColor?: string;
  fontSize?: string | number;
  fontFamily?: "PoppinsRegular" | "InterRegular" | "inherit";
  borderColor?: string;
  sentBoxBg?: string;
  receivedBoxBg?: string;
  sentBoxColor?: string;
  receivedBoxColor?: string;
  chatboxBg?: string;
  receivedBoxLinkColor?: string;
  sentBoxLinkColor?: string;
  mode?: "light" | "dark";
  title?: string;
  placement?: "left" | "right";
  height?: string | number;
  width?: string | number;
  secondaryColor?: string;
  bubbleTitle?: string;
  bubbleSubTitle?: string;
}
