import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

export const fetchChats = async () => {
  const { data } = await axios.get("chats");
  console.log(data.chats.data);
  return data.chats.data;
};
export const getOneChat = async chatId => {
  console.log("chatApi", chatId);
  try {
    const { data } = await axios.get(`chats/${chatId}`);
    console.log(data);
    return data.chat;
  } catch (err) {
    console.log(err.message);
  }
};
