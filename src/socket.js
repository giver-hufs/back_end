import ChatIndivisual from "./models/ChatIndivisual";
import ContentLocational from "./models/ContentLocational";
const socketIO = require("socket.io");

function initializeSocket(server) {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true,
    },
  });

  io.on("connection", async (socket) => {
    socket.on("university join", (universityCode) => {
      try {
        socket.join(universityCode);
        socket.emit("university joined", universityCode);
      } catch (err) {
        console.error("Error occured :", err);
      }
    });
    socket.on("request post", async (data) => {
      try {
        const {
          roomId,
          universityCode,
          contentName,
          content,
          hostName,
          phoneNumber,
        } = data;
        const newContent = new ContentLocational({
          roomId,
          universityCode,
          content,
          contentName,
          hostName,
          phoneNumber,
        });
        await newContent.save();
        io.to(universityCode).emit("new request", newContent);
      } catch (err) {
        console.error("Error occured:", err);
      }
      socket.on("request approve", async (data) => {
        try {
          await ContentLocational.findOneAndUpdate(
            { roomId: data.roomId },
            data
          );
          io.to(data.universityCode).emit("request approved", data);
        } catch (err) {
          console.log(err);
        }
      });
      socket.on("join room", async (data) => {
        try {
          socket.join(data.roomId);
        } catch (err) {
          console.log(err);
        }
      });
      socket.on("send message", async (data) => {
        const { roomId, message, senderId, senderName, createdTime } = data;
        const newChat = new ChatIndivisual({
          roomId,
          message,
          senderId,
          senderName,
          createdTime,
        });
        io.to(roomId).emit("sended message", newChat);
      });
      //   socket.on("mission completed", async(data) => {
      //     const {}
      //   })
    });
  });
}

module.exports = initializeSocket;
