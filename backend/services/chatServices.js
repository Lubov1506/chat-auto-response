import { Chat } from "../db/models/Chat.js";

export const findAllChats = async () => {
  const data = await Chat.find();
  return {
    data,
  };
};
export const findOneUserChat = filter => {
  return Chat.findOne(filter);
};
export const createChat = async data => {
  const chat = new Chat(data);
  return chat.save();
};
export const updateChat = async (id, data) => {
  return Chat.findOneAndUpdate(id, data, { new: true });
};
export const removeChat = async id => {
  return Chat.findOneAndDelete(id);
};
