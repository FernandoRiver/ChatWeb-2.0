import React from "react";
import ChatArea from "./chat-area"
import MessageArea from "./message-area"

class chat_container extends React.Component{
    render(){
        return(
            <div id="chat-container" className="hidden">
                <ChatArea></ChatArea>
                <MessageArea/>
            </div>
        )
    }
}

export default chat_container;