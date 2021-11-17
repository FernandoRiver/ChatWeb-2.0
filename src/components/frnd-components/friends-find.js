import React from "react";

class friend_find extends React.Component{
    render(){
        return(
            <div >
               <h2>Buscar Amigo</h2>
               <input type="number" placeholder="El ID por favor..."></input>
               <div className="search-friend">
                    Buscar
               </div>
            </div>
        )
    }
}

export default friend_find