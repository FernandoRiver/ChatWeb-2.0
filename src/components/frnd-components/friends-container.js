import React from "react";
import FriendCelda from "./friends-list"
import FindFriend from "./friends-find"
import Friend_soli from "./friends-soli";
class friends extends React.Component{
    render(){
        return(
            <div id="friends-container" className="hidden">
                <div id="friends">
                    <FriendCelda></FriendCelda>
                    <FriendCelda></FriendCelda>
                    <FriendCelda></FriendCelda>
                </div>
                <div className="friend-find">
                    <FindFriend/>
                    <h2>Solicitudes</h2>
                    <div id="friend-soli">
                        <Friend_soli Image="https://cdn4.iconfinder.com/data/icons/web-ui-3/128/Account-128.png" Name="User Name"></Friend_soli>
                    </div>
                </div>
            </div>
        )
    }

}

export default friends;