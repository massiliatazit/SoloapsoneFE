import io from "socket.io-client";
const connOpt = {
    transports: ["websocket"],
  };
let socket = io(process.env.REACT_APP_URL,connOpt);
export const joinRoom = (data)=>{
    socket.emit("join",data)
}

  
  export const leaveRoom = (data) => {
    socket.emit("LEAVE_ROOM", data);
  };
  
 
  
  export const listenChat = ( data) => {
    
    socket.on("CHAT_MESSAGE", data);
  };
  
  export const sendChat = (data) => {
    socket.emit("CHAT_MESSAGE", data);
  };
















