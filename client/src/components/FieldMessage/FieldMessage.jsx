import s from "./FieldMessage.module.css";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";

const FieldMessage = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    if (message.trim()) {
      try {
        await onSendMessage(message);
        setMessage("");
      } catch (error) {
        console.log("Error sending", error.message);
      }
    }
  };
  const handleKeyDown = async e => {
    if (e.key === "Enter") {
      await handleSubmit(e);
    }
  };
  return (
    <div className={s.field_message}>
      <div className={s.text_wrap}>
        <textarea
          placeholder="Type your message"
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit}>
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default FieldMessage;
