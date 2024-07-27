import { useEffect } from "react";
import { fetchChats } from "../../api/chatApi";
import { useHttp } from "../../hooks/useHttp";
import ChatItem from "../ChatItem/ChatItem";
import s from "./ChatList.module.css";

const ChatList = () => {
  const [users] = useHttp(fetchChats);

  return (
    <div>
      {users ? (
        <ul className={s.chat_list}>
          {users.map(user => {
            return <ChatItem key={user._id} user={user} />;
          })}
        </ul>
      ) : null}
    </div>
  );
};
export default ChatList;
