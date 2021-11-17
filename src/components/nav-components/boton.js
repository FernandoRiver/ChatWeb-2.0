import React from "react";

class nav_boton extends React.Component{
    render(){
        return(
            <div>
                <a id="nav-option" className={this.props.class} href={this.props.href}>{this.props.title}</a>
            </div>
        )
    }
}

export default nav_boton; 