const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// serve frontend
app.use(express.static("public"));

// socket.io
io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  socket.on("join chat", ({ name, emoji }) => {
    socket.user = { name, emoji };  // ✅ FIX
    io.emit("chat message", { user: "System", msg: `${emoji} ${name} joined the chat` });
  });

  socket.on("chat message", (msg) => {
    if (socket.user) {
      io.emit("chat message", { user: socket.user.name, emoji: socket.user.emoji, msg });
    }
  });

  socket.on("disconnect", () => {
    if (socket.user) {
      io.emit("chat message", { user: "System", msg: `${socket.user.emoji} ${socket.user.name} left the chat` });
    }
    console.log("🔴 User disconnected:", socket.id);
  });
});

server.listen(3000, "0.0.0.0", () => {
  console.log("🚀 Server running on http://localhost:3000");
});
