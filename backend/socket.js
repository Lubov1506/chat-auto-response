import { Server } from "socket.io";
import { createServer } from "node:http";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", socket => {
  // console.log("New frontend connected");
  socket.on("chat-message", data => {
    socket.broadcast.emit("chat-message", data);
  });

  socket.on("chat-update", updatedChats => {
    chats = updatedChats;
    socket.emit("chat-update", updatedChats);
  });

  socket.on("disconnect", () => {
    console.log("Frontend close chat");
  });
});

export default io;
