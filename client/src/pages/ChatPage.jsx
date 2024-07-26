import { Outlet } from "react-router-dom";
import ChatList from "../components/ChatList/ChatList";
import s from "./ChatPage.module.css";

import AsideHeader from "../components/AsideHeader/AsideHeader";

const ChatPage = () => {
  return (
    <div className={s.chat_page}>
      <aside>
        <AsideHeader />
        <section>
          <p>
            <span className="blue">Chats</span>
          </p>
          <ChatList />
        </section>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default ChatPage;
