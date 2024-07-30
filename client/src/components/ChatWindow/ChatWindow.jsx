import { useNavigate, useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import UserLogo from "../UserLogo/UserLogo";
import s from "./ChatWindow.module.css";
import { getOneChat, sendMessage } from "../../api/chatApi";
import { useEffect } from "react";
import FieldMessage from "../FieldMessage/FieldMessage";
import MessageList from "../MessageList/MessageList";

const ChatWindow = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [chat, setChat, loading] = useHttp(getOneChat, chatId);

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

  const handleSendMessage = async message => {
    try {
      await sendMessage({ chatId, message });
      let updatedChat = await getOneChat(chatId);
      setChat(updatedChat);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

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
        {messages.length ? (
          <MessageList messages={messages} currentUserId={chatId} />
        ) : (
          <p className={s.empty_chat}>
            Send a message to start a communication!
          </p>
        )}
      </main>
      <footer>
        <FieldMessage onSendMessage={handleSendMessage} />
      </footer>
    </div>
  );
};
export default ChatWindow;
