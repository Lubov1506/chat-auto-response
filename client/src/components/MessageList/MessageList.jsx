import { useEffect, useRef } from "react";
import MessageItem from "../MessageItem/MessageItem";
import s from "./MessageList.module.css";

const MessageList = ({ messages, currentUserId }) => {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <ul className={s.message_list}>
      {messages
        ? messages.map((item, index) => {
            return (
              <MessageItem
                key={index}
                message={item}
                currentUserId={currentUserId}
              />
            );
          })
        : null}
      <li ref={listRef} />
    </ul>
  );
};

export default MessageList;
