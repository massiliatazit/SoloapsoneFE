import io from "socket.io-client";
let socket = io(process.env.REACT_APP_URL)
export const joinRoom = (data)=>{
    socket.emit("join",data)
}

















