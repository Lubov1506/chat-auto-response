import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

export const fetchChats = async () => {
  const { data } = await axios.get("chats");
  return data.chats.data;
};
export const getOneChat = async chatId => {
  const { data } = await axios.get(`chats/${chatId}`);
  return data.chat;
};

export const createChat = async () => {};
export const sendMessage = async () => {};
