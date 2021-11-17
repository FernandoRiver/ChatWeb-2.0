import React from "react";

class chat extends React.Component{
    render(){
        return(
            <div id="chat" className={this.props.class}>
                <div id="chat-img">
                    <img src="https://cdn4.iconfinder.com/data/icons/web-ui-3/128/Account-128.png"/>
                </div>
                <div id="chat-data">
                    <div id="data">
                        <p>Name</p>
                        <span>Last Message</span>
                    </div>
                    <div id="hour">
                        00:00 am
                    </div>
                </div>
            </div>
        )
    }
}

export default chat;