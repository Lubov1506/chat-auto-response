import MessageItem from "../MessageItem/MessageItem";
import s from "./MessageList.module.css";
const MessageList = ({ messages }) => {
  console.log(messages);
  return (
    <ul className={s.message_list}>
      {messages
        ? messages.map(item => {
            return <MessageItem key={item._id} message={item} />;
          })
        : null}
    </ul>
  );
};

export default MessageList;