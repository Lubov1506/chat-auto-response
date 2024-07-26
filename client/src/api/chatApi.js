import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

export const fetchChats = async () => {
  const { data } = await axios.get("chats");
  console.log(data.chats.data);
  return data.chats.data;
};
