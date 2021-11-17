import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const add_friend = <FontAwesomeIcon icon={faUserMinus} />
const delet_friend = <FontAwesomeIcon icon={faUserPlus} />
class friend_soli extends React.Component{
    render(){
        return(
            <div className="soli-container">
                <img src={this.props.Image}></img>
                <div>
                    <h3>{this.props.Name}</h3>
                </div>
                <div id="soli-option">
                    {add_friend}
                    {delet_friend}
                </div>
            </div>
        )
    }   
}

export default friend_soli