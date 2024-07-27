import { useLocation, useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import UserLogo from "../UserLogo/UserLogo";
import s from "./ChatWindow.module.css";
import { getOneChat } from "../../api/chatApi";
import { useEffect } from "react";

const ChatWindow = () => {
  const { chatId } = useParams();
  // console.log("ChatWindow chatId:", chatId);
  const [chat, setChat, loading] = useHttp(getOneChat, chatId);

  useEffect(() => {
    setChat(null);
  }, [chatId, setChat]);

  // console.log(chatId);
  // console.log("ChatWindow chat:", chat);

  if (loading) return <p>Loading...</p>;
  if (!chat) return <p>No chat found</p>;

  const { firstName, lastName, messages } = chat;
  return (
    <div className={s.chat_window}>
      <header>
        <UserLogo />
        <p>
          {firstName} {lastName}
        </p>
      </header>
      <main>
        {messages
          ? messages.map(item => {
              return <li key={item._id}>{item.text}</li>;
            })
          : null}
      </main>
    </div>
  );
};
export default ChatWindow;
