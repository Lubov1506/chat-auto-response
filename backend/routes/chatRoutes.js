import express from "express";
import chatController from "../controllers/chatController.js";
const chatRouter = express.Router();

chatRouter.get("/", chatController.getAllChats);
chatRouter.get("/:chatId", chatController.getOneUserChat);
chatRouter.post("/", chatController.createChat);
chatRouter.patch("/:chatId", chatController.updateChat);
chatRouter.delete("/:chatId", chatController.deleteChat);

export default chatRouter;
