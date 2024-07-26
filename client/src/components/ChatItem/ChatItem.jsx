import { formatDate } from "../../helpers/formatDate";
import UserLogo from "../UserLogo/UserLogo";
import s from "./ChatItem.module.css";
const ChatItem = ({ user }) => {
  const { firstName, lastName = "Last", createdAt } = user;
  console.log(user);
  return (
    <li className={s.chat_item}>
      <div className={s.left}>
        <UserLogo />
        <div>
          <h2>
            {firstName} {lastName}
          </h2>
          <p>last message</p>
        </div>
      </div>
      <div>{formatDate(createdAt)}</div>
    </li>
  );
};
export default ChatItem;
