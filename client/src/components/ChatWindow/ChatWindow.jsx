import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import UserLogo from "../UserLogo/UserLogo";
import s from "./ChatWindow.module.css";
import { getOneChat } from "../../api/chatApi";
import { useEffect } from "react";
import FieldMessage from "../FieldMessage/FieldMessage";
import MessageList from "../MessageList/MessageList";

const ChatWindow = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [chat, _, loading] = useHttp(getOneChat, chatId);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "Escape") {
        navigate("/");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

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
      <main>{<MessageList messages={messages} />}</main>
      <footer>
        <FieldMessage />
      </footer>
    </div>
  );
};
export default ChatWindow;
