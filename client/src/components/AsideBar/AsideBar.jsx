import { useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import ChatList from "../ChatList/ChatList";
import { createChat, fetchChats, searchChats } from "../../api/chatApi";
import s from "./AsideBar.module.css";
import UserLogo from "../UserLogo/UserLogo";
import SearchBar from "../SearchBar/SearchBar";
import { IoCreateOutline } from "react-icons/io5";
import CreateChatModal from "../ChatModal/ChatModal";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { sortChatsByDate } from "../../helpers/sortChatsByDate ";
const AsideBar = () => {
  const [chats, setChats] = useHttp(fetchChats, null, sortChatsByDate);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSeadch = async query => {
    try {
      const searchResults = await searchChats(query);
      setChats(sortChatsByDate(searchResults));
    } catch (error) {
      console.error("Error searching chats:", error);
    }
  };

  const handleCreateChat = async newChatData => {
    try {
      const newChat = await createChat(newChatData);
      setChats(sortChatsByDate([...chats, newChat]));
      closeModal();
    } catch (error) {
      console.error("Error creating chat:", error);
    }
  };
  const handleUpdateChat = ({ updatedChat }) => {
    setChats(prevChats => {
      const updatedChats = prevChats.map(chat =>
        chat._id === updatedChat._id ? updatedChat : chat
      );
      return sortChatsByDate(updatedChats);
    });
  };

  const handleDeleteChat = chatId => {
    setChats(prevChats => {
      const updatedChats = prevChats.filter(chat => chat._id !== chatId);
      return sortChatsByDate(updatedChats);
    });
  };
  return (
    <aside className={s.aside_bar}>
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
          <Button onClick={openModal}>
            <IoCreateOutline size={22} />
          </Button>
        </div>
        {isOpen && (
          <Modal onClose={closeModal} title="New chat">
            <CreateChatModal onSubmit={handleCreateChat} />
          </Modal>
        )}
        {chats && (
          <ChatList
            chats={chats}
            onUpdate={handleUpdateChat}
            onDelete={handleDeleteChat}
          />
        )}
        {(!chats || chats.length === 0) && (
          <Button onClick={openModal}>Create chat</Button>
        )}
      </section>
    </aside>
  );
};
export default AsideBar;
