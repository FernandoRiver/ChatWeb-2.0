import React from "react";

class profile extends React.Component{
    render(){
        return(
            <div className="profile-data">
               <div className="profile-image">
                    <img src="https://cdn4.iconfinder.com/data/icons/web-ui-3/128/Account-128.png"/>
               </div>
               <div className="data-container">
                    <p>ID: #{this.props.ID}</p>
                    <p>Usuario: {this.props.User}</p>
                </div>
                <div id="profile-option">
                    <div id="user-logout">Salir</div>
                </div>
            </div>
        )
    }
}

export default profile;