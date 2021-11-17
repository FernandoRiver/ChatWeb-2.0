import React from "react";


class message extends React.Component{
    render(){
        return(
            <div className={this.props.class_container}>
                <div className={this.props.class}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default message;