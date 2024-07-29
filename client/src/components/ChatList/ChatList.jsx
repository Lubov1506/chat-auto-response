import ChatItem from "../ChatItem/ChatItem";
import s from "./ChatList.module.css";

const ChatList = ({ chats }) => {
  console.log(chats);
  return (
    <div>
      {chats ? (
        <ul className={s.chat_list}>
          {chats.map(chat => {
            return <ChatItem key={chat._id} chat={chat} />;
          })}
        </ul>
      ) : null}
    </div>
  );
};
export default ChatList;
