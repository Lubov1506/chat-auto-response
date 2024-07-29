// import { useNavigate, useParams } from "react-router-dom";
// import { useHttp } from "../../hooks/useHttp";
// import UserLogo from "../UserLogo/UserLogo";
// import s from "./ChatWindow.module.css";
// import { getOneChat, sendMessage } from "../../api/chatApi";
// import { useEffect, useState } from "react";
// import FieldMessage from "../FieldMessage/FieldMessage";
// import MessageList from "../MessageList/MessageList";
// import io from "socket.io-client";

// const socket = io("http://localhost:5000");
// const ChatWindow = () => {
//   const { chatId } = useParams();
//   const navigate = useNavigate();
//   const [chat, setChat, loading] = useHttp(getOneChat, chatId);

//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     if (chat) {
//       setMessages(chat.messages);
//     }
//   }, [chat]);

//   useEffect(() => {
//     const handleKeyDown = event => {
//       if (event.key === "Escape") {
//         navigate("/");
//       }
//     };
//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [navigate]);
//   useEffect(() => {
//     socket.on("chat-update", updatedChat => {
//       if (updatedChat._id === chatId) {
//         setMessages(updatedChat.messages);
//       }
//     });

//     return () => {
//       socket.off("chat-update");
//     };
//   }, [chatId]);
//   const handleSendMessage = async message => {
//     try {
//       await sendMessage(chatId, message);
//       let updatedChat = await getOneChat(chatId);
//       setChat(updatedChat);
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (!chat) return <p>No chat found</p>;

//   const { firstName, lastName } = chat;
//   return (
//     <div className={s.chat_window}>
//       <header>
//         <UserLogo />
//         <p>
//           {firstName} {lastName}
//         </p>
//       </header>
//       <main>{<MessageList messages={messages} />}</main>
//       <footer>
//         <FieldMessage onSendMessage={handleSendMessage} />
//       </footer>
//     </div>
//   );
// };
// export default ChatWindow;

import { useNavigate, useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import UserLogo from "../UserLogo/UserLogo";
import s from "./ChatWindow.module.css";
import { getOneChat, sendMessage } from "../../api/chatApi";
import { useEffect, useState } from "react";
import FieldMessage from "../FieldMessage/FieldMessage";
import MessageList from "../MessageList/MessageList";
import io from "socket.io-client";

const ChatWindow = () => {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [chat, setChat, loading] = useHttp(getOneChat, chatId);
  const [messages, setMessages] = useState([]);
  console.log(chat);
  useEffect(() => {
    if (chat) {
      console.log(chat);
      setMessages(chat.messages);
    }
  }, [chat]);

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

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("chat message", data => {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      setMessages(prevMessages => [...prevMessages, parsedData]);
    });

    return () => {
      socket.off("chat message");
      socket.disconnect();
    };
  }, [chatId]);

  const handleSendMessage = async message => {
    try {
      await sendMessage(chatId, message);
      let updatedChat = await getOneChat(chatId);
      setChat(updatedChat);
      setTimeout(async () => {
        try {
          const autoResponse = await getOneChat(chatId);
          setChat(autoResponse);
        } catch (error) {
          console.error("Error fetching auto response:", error);
        }
      }, 3000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!chat) return <p>No chat found</p>;

  const { firstName, lastName } = chat;
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
        <FieldMessage onSendMessage={handleSendMessage} />
      </footer>
    </div>
  );
};
export default ChatWindow;
