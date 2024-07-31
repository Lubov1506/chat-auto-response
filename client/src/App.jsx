import { Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import DefaultContent from "./components/DefaultContent/DefaultContent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChatPage />}>
          <Route index element={<DefaultContent />} />
          <Route path="chats" element={<DefaultContent />} />
          <Route path="chats/:chatId" element={<ChatWindow />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
