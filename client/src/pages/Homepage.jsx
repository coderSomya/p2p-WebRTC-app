import React, {useState, useEffect} from "react";
import './Homepage.css'
import { useSocket } from "../providers/Socket";


const Homepage = ()=>{

    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");
   



   const {socket} = useSocket();
   const handleJoinRoom= ()=>{
      
      socket.emit("join-room", {emailid:email, roomid:room});
   }
   return(
    <>
   <div className="homepage-container">
    <div>
        <input value={email}
        onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="enter your email here"/>
        <input value={room} 
        onChange={(e)=>setRoom(e.target.value)}
        type="text" placeholder="enter room code"/>
        <button onClick={handleJoinRoom}>GO</button>
        </div>
    </div> 
    </>
   )
}

export default Homepage