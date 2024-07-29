import s from "./FieldMessage.module.css";
import { IoMdSend } from "react-icons/io";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <div className={s.field_message}>
      <label>
        <input
          placeholder="Type your message"
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button onClick={handleSubmit}>
          <IoMdSend />
        </button>
      </label>
    </div>
  );
};

export default FieldMessage;
