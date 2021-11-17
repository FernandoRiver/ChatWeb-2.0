import React from "react";
import Navegador from "./nav-components/navegador";
import Chat from './chat-components/chat-container'
import Friends from "./frnd-components/friends-container";
import Profile from "./profile-components/profile-container";

class all_components extends React.Component{
    render(){
        return(
            <div>
                <Navegador></Navegador>
                <div id="container">
                    <Chat></Chat>
                    <Friends></Friends>
                    <Profile></Profile>
                </div>
                <script src='../js/app.js'></script>
            </div>
        )
    }
}

export default all_components;