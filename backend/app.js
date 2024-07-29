import { env } from "./utils/env.js";
import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
import chatRouter from "./routes/chatRoutes.js";
import { Server } from "socket.io";

const startServer = () => {
  const port = Number(env("PORT", 5000));
  const app = express();

  const httpServer = createServer();

  const wsServer = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  wsServer.on("connection", socket => {
    console.log("New frontend connected");
    socket.on("chat-message", data => {
      socket.broadcast.emit("chat-message", data);
    });

    socket.on("disconnect", () => {
      console.log("Frontend close chat");
    });
  });

  app.use(cors());
  app.use(express.json());

  app.use("/api/chats", chatRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  httpServer.listen(port, () => {
    console.log(`Server is running. Use our API on port: ${port}`);
  });
};

export default startServer;

// import { env } from "./utils/env.js";
// import express from "express";
// import cors from "cors";
// import notFoundHandler from "./middlewares/notFoundHandler.js";
// import errorHandler from "./middlewares/errorHandler.js";
// import chatRouter from "./routes/chatRoutes.js";
// import http from "http";
// import { Server } from "socket.io";

// const startServer = () => {
//   const port = Number(env("PORT", 5000));
//   const app = express();
//   const server = http.createServer(app);
//   const io = new Server(server, {
//     cors: {
//       origin: "http://localhost:3000",
//       methods: ["GET", "POST", "PATCH", "DELETE"],
//     },
//   });

//   io.on("connection", socket => {
//     console.log("a user connected");

//     socket.on("disconnect", () => {
//       console.log("user disconnected");
//     });

//     socket.on("chat message", msg => {
//       io.emit("chat message", msg);
//     });
//   });

//   app.use(cors());
//   app.use(express.json());

//   app.use("/api/chats", chatRouter);

//   app.use(notFoundHandler);
//   app.use(errorHandler);

//   app.listen(port, () => {
//     console.log(`Server is running. Use our API on port: ${port}`);
//   });
// };

// export default startServer;
