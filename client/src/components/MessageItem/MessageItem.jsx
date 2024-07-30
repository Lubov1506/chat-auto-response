import clsx from "clsx";
import { formatDate } from "../../helpers/formatDate";
import UserLogo from "../UserLogo/UserLogo";
import s from "./MessageItem.module.css";

const MessageItem = ({ message, currentUserId }) => {
  const { text, createdAt, author } = message;
  const isOwnMessage = author === currentUserId;
  const date = formatDate(createdAt, "d/MM/yyyy, h:mmaaa");
  return (
    <div className={clsx(s.message_item, { [s.own_message]: isOwnMessage })}>
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
