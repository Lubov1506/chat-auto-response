import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

export const fetchChats = async () => {
  const { data } = await axios.get("chats");
  return data.chats.data;
};
export const getOneChat = async chatId => {
  console.log(chatId);
  const { data } = await axios.get(`chats/${chatId}`);
  return data.chat;
};
export const sendMessage = async (chatId, message) => {
  console.log(chatId);
  const { data } = await axios.post(`chats/${chatId}/messages`, {
    text: message,
  });
  return data;
};
export const createChat = async name => {
  const { data } = await axios.post("chats", { name });
  return data.chat;
};

export const searchChats = async query => {
  console.log(query);
  const { data } = await axios.get(`chats/search`, {
    params: { query },
  });
  console.log(data);
  return data.chats;
};
