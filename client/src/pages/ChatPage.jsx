import { Outlet } from "react-router-dom";
import s from "./ChatPage.module.css";
import AsideBar from "../components/AsideBar/AsideBar";

const ChatPage = () => {
  return (
    <div className={s.chat_page}>
      <AsideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default ChatPage;
