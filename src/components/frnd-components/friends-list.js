import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faUserMinus} />

class friend extends React.Component{
    render(){
        return(
            <div className="friend-celda">
               <div className="friend-name">
                    <img src="https://cdn4.iconfinder.com/data/icons/web-ui-3/128/Account-128.png"/>
               </div>
               <div className="friend-data">
                    <p>Name</p>
                    <span>Last Message</span>
                </div>
               <div className="friend-option">
                    {element}
               </div>
            </div>
        )
    }
}

export default friend