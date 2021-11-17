import React from "react"
import Boton from "./boton"


class navegador extends React.Component{
    render(){
        return(
            <div id='navegador' >
                
                    {/* <Boton title="Inicio" href="index.html"></Boton> */}
                    <Boton title="Chat" class="hidden" href="#"></Boton>
                    <Boton title="Amigos" class="hidden" href="#"></Boton>
                    <Boton title="Perfil" class="select" href="#"></Boton>
                
            </div>
        )
    }
    
}


export default  navegador;