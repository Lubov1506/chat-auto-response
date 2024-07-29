import ChatItem from "../ChatItem/ChatItem";
import s from "./ChatList.module.css";

const ChatList = ({ chats, onUpdate, onDelete }) => {
  return (
    <>
      <div className={s.chat_list}>
        {!!chats.length ? (
          <ul className={s.chat_list}>
            {chats.map(chat => {
              return (
                <ChatItem
                  key={chat._id}
                  chat={chat}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              );
            })}
          </ul>
        ) : null}
      </div>
    </>
  );
};
export default ChatList;
