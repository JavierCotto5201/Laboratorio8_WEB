import React from "react";
import "../components/Cartas.css";

export default class Contenido extends React.Component {
  render() {
    return (
      <div className="contenido" onClick={this.props.handleClick}>
        <i className={`fa ${this.props.icono} fa-5x`} />
      </div>
    );
  }
}
