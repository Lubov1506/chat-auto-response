import { useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import ChatList from "../ChatList/ChatList";
import { fetchChats, searchChats } from "../../api/chatApi";
import s from "./AsideBar.module.css";
import UserLogo from "../UserLogo/UserLogo";
import SearchBar from "../SearchBar/SearchBar";
import CreateChatButton from "../CreateChatButton/CreateChatButton";
import { IoCreateOutline } from "react-icons/io5";
const AsideBar = () => {
  const [fetchedChats, setChats] = useHttp(fetchChats);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSeadch = async query => {
    if (query.trim() === "") return;
    try {
      const searchResults = await searchChats(query);
      console.log(searchResults);
      setChats(searchResults);
    } catch (error) {
      console.error("Error searching chats:", error);
    }
  };
  return (
    <aside>
      <header className={s.aside_header}>
        <div>
          <UserLogo />
          <button>Log in</button>
        </div>
        <SearchBar onChange={handleSeadch} />
      </header>
      <section>
        <div className={s.chats_header}>
          <p>
            <span className="blue">Chats</span>
          </p>
          <CreateChatButton openModal={openModal}>
            <IoCreateOutline size={22} />
          </CreateChatButton>
        </div>
        {fetchedChats && (
          <ChatList
            chats={fetchedChats}
            isOpen={isOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        )}
      </section>
    </aside>
  );
};
export default AsideBar;
