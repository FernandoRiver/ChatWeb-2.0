import React from "react";
import Profile from "./profile";
import Profile_login from "./profile-login";

class profile_container extends React.Component{
    render(){
        return(
            <div id="profile-container" className="show">
                <div className="profile">
                    {/* <Profile ID="00000" User="Name User"></Profile> */}
                    <Profile_login></Profile_login>
                </div>
            </div>
        )
    }
}

export default profile_container;
