import React from "react";
import "./Cartas.css";
import Contenido from "../utils/Contenido";
import Portada from "../utils/Portada";
import FlipCard from "react-card-flip";

export default class Cartas extends React.Component {
  constructor() {
    var name = 4
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
        <div className="carta">
            <FlipCard isFlipped={this.props.SiendoComp || this.props.acierto} flipDirection="vertical">
              <Portada handleClick={this.props.seleccionarCarta}>    
              </Portada>
                <Contenido handleClick={this.props.seleccionarCarta} icono = {this.props.icono}>

                </Contenido>
            </FlipCard>
        </div>
    );
  }
}