import React from "react";
import "../components/Cartas.css"

class Portada extends React.Component {
        render() {
            return (
                <div className="portada" onClick={this.props.handleClick}></div>
            );
        }   
};
export default Portada;