import { formatDate } from "../../helpers/formatDate";
import UserLogo from "../UserLogo/UserLogo";
import s from "./MessageItem.module.css";

const MessageItem = ({ message }) => {
  const { text, createdAt } = message;
  const date = formatDate(createdAt, "d/MM/yyyy, h:mmaaa");
  return (
    <div className={s.message_item}>
      <div className={s.logo}>
        <UserLogo status={false} />
      </div>
      <div className={s.msg_text}>
        <li>{text}</li>
        <span className={s.date}>{date}</span>
      </div>
    </div>
  );
};

export default MessageItem;
