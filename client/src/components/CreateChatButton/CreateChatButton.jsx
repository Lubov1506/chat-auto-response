import s from "./CreateChatButton.module.css";
const CreateChatButton = ({ children, openModal }) => {
  return (
    <button className={s.create_btn} onClick={openModal}>
      {children}
    </button>
  );
};
export default CreateChatButton;
