import React from "react";
import styles from "./chat.module.css";

const ChatLoader = ({ fromPlay }: { fromPlay?: boolean }) => {
  return (
    <div className={`${styles["sarufi-chat-loader"]}`}>
      <div className={styles["sarufi-bounce1"]}></div>
      <div className={styles["sarufi-bounce2"]}></div>
      {!fromPlay && <div className={styles["sarufi-bounce3"]}></div>}
    </div>
  );
};

export default ChatLoader;
