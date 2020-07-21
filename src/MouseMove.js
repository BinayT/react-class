import React, { Component } from "react";

export default class MouseMove extends Component {
  state = { posX: 0, posY: 0 };

  manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    this.setState({ posX: clientX, posY: clientY });
  };

  alertPosition = () => {
    alert(`X-----> ${this.state.posX}\nY-----> ${this.state.posY}`);
  };

  render() {
    return (
      <div
        onMouseMove={this.manageMouseMove}
        style={{ border: "1px solid black", marginTop: 10, padding: 10 }}
        onClick={this.alertPosition}
      >
        <p>
          {this.state.posX}, {this.state.posY}
        </p>
      </div>
    );
  }
}
