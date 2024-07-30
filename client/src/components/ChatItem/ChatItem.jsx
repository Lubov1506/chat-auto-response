import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatDate } from "../../helpers/formatDate";
import ChatLogo from "../UserLogo/UserLogo";
import s from "./ChatItem.module.css";
import Button from "../Button/Button";
import { MdDelete, MdEdit } from "react-icons/md";
import Modal from "../Modal/Modal";
import CreateChatModal from "../ChatModal/ChatModal";
import { useState } from "react";
import { deleteChat, updateChat } from "../../api/chatApi";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

const ChatItem = ({ chat, onUpdate, onDelete }) => {
  const { _id, firstName, lastName, createdAt, messages } = chat;
  const location = useLocation();
  const navigate = useNavigate();
  const [isEditOpen, setEditIsOpen] = useState(false);
  const [isDeleteOpen, setDeleteIsOpen] = useState(false);

  const openEditModal = e => {
    setEditIsOpen(true);
  };
  const closeEditModal = () => {
    setEditIsOpen(false);
  };
  const openDeleteModal = e => {
    setDeleteIsOpen(true);
  };
  const closeDeleteModal = () => {
    setDeleteIsOpen(false);
  };
  const lastMsg = messages.length
    ? messages[messages.length - 1].text
    : "No messages";

  const handleEdit = async updatedData => {
    try {
      const updatedChat = await updateChat({ chatId: _id, data: updatedData });
      closeEditModal();
      onUpdate(updatedChat);
    } catch (error) {
      console.error("Error updating chat:", error);
    }
  };
  const handleDelete = async () => {
    try {
      await deleteChat(_id);
      onDelete(_id);
      navigate("/chats");
      closeDeleteModal();
    } catch (error) {
      console.error("Error deleting chat:", error);
    }
  };

  return (
    <li className={s.chat_list_item}>
      <Link
        to={`/chats/${_id}`}
        state={{ from: location }}
        className={s.chat_item}
      >
        <div className={s.left}>
          <div className={s.logo}>
            <ChatLogo />
          </div>
          <div>
            <h2>
              {firstName} {lastName}
            </h2>
            <p>{lastMsg}</p>
          </div>
        </div>
        <div className={s.date}>{formatDate(createdAt)}</div>
      </Link>
      <div className={s.options}>
        <Button onClick={openEditModal}>
          <MdEdit size={20} />
        </Button>
        <Button onClick={openDeleteModal}>
          <MdDelete size={20} />
        </Button>
      </div>
      {isEditOpen && (
        <Modal onClose={closeEditModal} title="Edit chat">
          <CreateChatModal
            onSubmit={handleEdit}
            data={{ firstName, lastName }}
            type="edit"
          />
        </Modal>
      )}
      {isDeleteOpen && (
        <Modal onClose={closeDeleteModal} title="Delete ?">
          <ConfirmModal
            onSubmit={handleDelete}
            data={_id}
            onClose={closeDeleteModal}
          />
        </Modal>
      )}
    </li>
  );
};
export default ChatItem;
