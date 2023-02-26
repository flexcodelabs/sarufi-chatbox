import React from "react";
import styles from "./spinner.module.css";

const ChatLoader = () => {
  return (
    <div className={`${styles["sarufi-chat-loader"]}`}>
      <div className={styles["sarufi-bounce1"]}></div>
      <div className={styles["sarufi-bounce2"]}></div>
      <div className={styles["sarufi-bounce3"]}></div>
    </div>
  );
};

export default ChatLoader;
