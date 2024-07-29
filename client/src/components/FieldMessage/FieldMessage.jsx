import s from "./FieldMessage.module.css";
import { IoMdSend } from "react-icons/io";

const FieldMessage = () => {
  return (
    <div className={s.field_message}>
      <label>
        <input placeholder="Type your message" type="text" />
        <button>
          <IoMdSend />
        </button>
      </label>
    </div>
  );
};

export default FieldMessage;
