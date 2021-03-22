import React from "react";
import "./Header.css"

export default class Header extends React.Component {
  render() {
    return (
        <header id="Header">
            <div id="titulo">Laboratorio 8: Memoria con React</div>
            <div id="intentos">Intentos para completar el juego: {this.props.numIntentos} </div>
        </header>
    );
  }
}

