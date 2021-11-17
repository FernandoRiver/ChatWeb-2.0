import React from "react";

class profile_login extends React.Component{
    render(){
        return(
            <div className="profile-login">
               <div className="data-login">
                    <h2>Login</h2>
                    <p>Usuario:</p>
                    <input type="text"></input>
                    <p>Contraseña:</p>
                    <input type="password"></input>
                </div>
               <div className="data-signin">
                    <h2>Sign in</h2>
                    <p>Usuario:</p>
                    <input type="text"></input>
                    <p>Contraseña:</p>
                    <input type="password"></input>
                </div>
                <div id="profile-option">
                    <div id="user-logout">Salir</div>
                </div>
            </div>
        )
    }
}

export default profile_login;