import React from "react";
import Message from "./message";
import BoxMessage from "./message-box"

class message_area extends React.Component{
    render(){
        return(
            <div id="message-container">
                <div id="message-area">
                <Message 
                    class_container='message' 
                    class='send' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tellus varius, aliquam erat at, ullamcorper mauris. Nunc scelerisque metus vel elit vestibulum varius.'
                />
                <Message 
                    class_container='message' 
                    class='recive' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tellus varius, aliquam erat at, ullamcorper mauris. Nunc scelerisque metus vel elit vestibulum varius.'
                />
                <Message 
                    class_container='message' 
                    class='send' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tellus varius, aliquam erat at, ullamcorper mauris. Nunc scelerisque metus vel elit vestibulum varius.'
                />
                <Message 
                    class_container='message' 
                    class='send' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tellus varius, aliquam erat at, ullamcorper mauris. Nunc scelerisque metus vel elit vestibulum varius.'
                />
                <Message 
                    class_container='message' 
                    class='recive' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tellus varius, aliquam erat at, ullamcorper mauris. Nunc scelerisque metus vel elit vestibulum varius.'
                />
                <Message 
                    class_container='message' 
                    class='send' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tellus varius, aliquam erat at, ullamcorper mauris. Nunc scelerisque metus vel elit vestibulum varius.'
                />
                <Message 
                    class_container='message' 
                    class='recive' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tellus varius, aliquam erat at, ullamcorper mauris. Nunc scelerisque metus vel elit vestibulum varius.'
                />
                <Message 
                    class_container='message' 
                    class='send' 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tellus varius, aliquam erat at, ullamcorper mauris. Nunc scelerisque metus vel elit vestibulum varius.'
                />
                <Message 
                    class_container='message' 
                    class='recive' 
                    text='1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tellus varius, aliquam erat at, ullamcorper mauris. Nunc scelerisque metus vel elit vestibulum varius.'
                />
                </div>
                <BoxMessage></BoxMessage>
            </div>
        )
    }

}

export default message_area;