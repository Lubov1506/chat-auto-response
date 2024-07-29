import { Link, useLocation } from "react-router-dom";
import { formatDate } from "../../helpers/formatDate";
import ChatLogo from "../UserLogo/UserLogo";
import s from "./ChatItem.module.css";

const ChatItem = ({ chat }) => {
  const { _id, firstName, lastName = "Last", createdAt, messages } = chat;
  const location = useLocation();

  const lastMsg = messages.length
    ? messages[messages.length - 1].text
    : "No messages";

  return (
    <li>
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
    </li>
  );
};
export default ChatItem;
