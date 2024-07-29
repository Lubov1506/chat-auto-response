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
  const { data } = await axios.post(`chats/${chatId}/messages`, {
    text: message,
  });
  return data;
};
export const createChat = async name => {
  const { firstName, lastName } = name;
  const { data } = await axios.post("chats", {
    firstName: firstName,
    lastName: lastName,
  });
  return data.chat;
};

export const searchChats = async query => {
  if (query.trim() === "") {
    const { data } = await axios.get("chats");
    return data.chats.data;
  }
  const { data } = await axios.get(`chats/search`, {
    params: { query },
  });
  return data.chats;
};
export const deleteChat = async chatId => {
  const { data } = await axios.delete(`chats/${chatId}`);
  return data;
};
export const updateChat = async ({ chatId, data }) => {
  const { data: updatedChat } = await axios.patch(`chats/${chatId}`, data);
  return updatedChat;
};
