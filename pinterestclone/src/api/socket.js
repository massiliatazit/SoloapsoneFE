import io from "socket.io-client";
const connOpt = {
    transports: ["websocket"],
  };
let socket = io(process.env.REACT_APP_URL,connOpt);
export const joinRoom = (data)=>{
  console.log("herreeeeeee joining")
    socket.emit("JOIN_ROOM",data)

}

  
  export const leaveRoom = (data) => {
    socket.emit("LEAVE_ROOM", data);
  };
  
 
  export const getRoomId=(setRoom)=>{
    socket.on("roomId",(data)=>setRoom(data))
  }
  export const listenChat = ( data) => {
    
    socket.on("CHAT_MESSAGE", data);
  };
  
  export const sendChat = (data) => {
    socket.emit("CHAT_MESSAGE", data);
  };
export const joinOnline = (data)=>{
  socket.emit("SET_ONLINE",data)

}















