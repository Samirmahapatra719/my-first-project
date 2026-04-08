const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server,{
  cors:{origin:"*"}
});

io.on("connection",(socket)=>{

  console.log("User connected");

  socket.on("message",(data)=>{
    io.emit("message",data);
  });

  socket.on("disconnect",()=>{
    console.log("User disconnected");
  });

});

server.listen(5000,()=>{
  console.log("Server running");
});