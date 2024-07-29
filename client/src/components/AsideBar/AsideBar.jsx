import { useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import ChatList from "../ChatList/ChatList";
import { fetchChats } from "../../api/chatApi";
import s from "./AsideBar.module.css";
import UserLogo from "../UserLogo/UserLogo";
import SearchBar from "../SearchBar/SearchBar";

const AsideBar = () => {
  const [fetchedChats] = useHttp(fetchChats);
  const [chats, setChats] = useState(fetchedChats);
  console.log(fetchedChats);

  return (
    <aside>
      <header className={s.aside_header}>
        <div>
          <UserLogo />
          <button>Log in</button>
        </div>
        <SearchBar />
      </header>
      <section>
        <p>
          <span className="blue">Chats</span>
        </p>
        <ChatList chats={fetchedChats} />
      </section>
    </aside>
  );
};
export default AsideBar;
