import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'


const element = <FontAwesomeIcon icon={faLocationArrow} />

class message_box extends React.Component{
    render(){
        return(
            <div id="message-box">
                <div className="box-container">
                    <input className='box-text'/>
                </div>
                <div className='send-button'>{element}</div>
            </div>
        )
    }
}

export default message_box;