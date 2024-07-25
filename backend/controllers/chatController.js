import ctrlWrapper from "../decorators/ctrlWrapper.js";
import * as chatServices from "../services/chatServices.js";
import HttpError from "../utils/HttpError.js";

const getAllChats = async (req, res) => {
  const chats = await chatServices.findAllChats();

  res.status(200).json({
    message: "Chats got successfully",
    chats,
  });
};

const getOneUserChat = async (req, res) => {
  const { id } = req.params;
  const chat = await chatServices.findOneUserChat(id);
  if (!chat) {
    throw HttpError(404, `Chat by id ${id} not found`);
  }
  res.status(200).json({
    message: "Chats got successfully",
    chat,
  });
};

const createChat = async (req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    throw HttpError(400, "First and last names are required");
  }
  const chat = await chatServices.createChat({
    firstName,
    lastName,
    messages: [],
  });
  res.status(201).json({
    status: 201,
    message: "Chat created successfully",
    chat,
  });
};

const updateChat = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;
  const updatedChat = await chatServices.updateChat(id, {
    firstName,
    lastName,
  });
  if (!updatedChat) {
    throw HttpError(404, `Chat with id ${id} not found`);
  }
  res.status(200).json({
    status: 200,
    message: "Chat updated successfully",
    updateChat,
  });
};

const deleteChat = async (req, res) => {
  const { id } = req.params;
  const removedChat = await chatServices.removeChat(id);
  if (!removedChat) {
    throw HttpError(404, `Chat with id ${id} not found`);
  }
  res.status(200).json({
    ststus: 200,
    message: "Chat removed successfully",
  });
};

export default {
  getAllChats: ctrlWrapper(getAllChats),
  getOneUserChat: ctrlWrapper(getOneUserChat),
  createChat: ctrlWrapper(createChat),
  updateChat: ctrlWrapper(updateChat),
  deleteChat: ctrlWrapper(deleteChat),
};
