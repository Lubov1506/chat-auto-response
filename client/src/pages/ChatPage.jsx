import { Outlet } from "react-router-dom";
import ChatList from "../components/ChatList/ChatList";
import SearchBar from "../components/SearchBar/SearchBar";
import s from "./ChatPage.module.css";
import userImage from "../assets/user.png";
const ChatPage = () => {
  return (
    <div className={s.chat_page}>
      <aside>
        <header>
          <div>
            <div className={s.img_wrapper}>
              <img src={userImage} alt="User" width="30" height="30" />
            </div>
            <button>Log in</button>
          </div>
          <SearchBar />
        </header>
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
