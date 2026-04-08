import { useState,useEffect } from "react";
import socket from "./socket";
import "./style.css";

export default function Chat({user}){

  const [msg,setMsg]=useState("");
  const [messages,setMessages]=useState([]);

  useEffect(()=>{

    socket.on("message",(data)=>{
      setMessages(prev=>[...prev,data]);
    });

  },[]);

  const sendMessage=()=>{
    socket.emit("message",{user,text:msg});
    setMsg("");
  };

  return(
    <div className="chat">

      <h2>Welcome {user}</h2>

      <div className="messages">
        {messages.map((m,i)=>(
          <p key={i}>
            <b>{m.user}:</b> {m.text}
          </p>
        ))}
      </div>

      <input
        value={msg}
        onChange={(e)=>setMsg(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>

    </div>
  );
}