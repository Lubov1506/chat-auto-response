import { useState } from "react";
import ChatItem from "../ChatItem/ChatItem";
import Modal from "../Modal/Modal";
import s from "./ChatList.module.css";
import CreateMessageButton from "../CreateChatButton/CreateChatButton";

const ChatList = ({ chats, isOpen, openModal, closeModal }) => {
  return (
    <>
      <div className={s.chat_list}>
        {!!chats.length ? (
          <ul className={s.chat_list}>
            {chats.map(chat => {
              return <ChatItem key={chat._id} chat={chat} />;
            })}
          </ul>
        ) : (
          <CreateMessageButton openModal={openModal}>
            Create chat
          </CreateMessageButton>
        )}
      </div>
      {isOpen && <Modal onClose={closeModal} />}
    </>
  );
};
export default ChatList;
