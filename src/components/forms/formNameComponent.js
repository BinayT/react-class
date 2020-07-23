import React from "react";

export default class FormNameComponent extends React.Component {
  state = {
    name: "",
    show: true,
  };

  inputChangedHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clickedSend = () => {
    this.setState({ show: false });
  };

  clickedClear = () => {
    this.setState({ show: true, name: "" });
  };

  render() {
    return (
      <div>
        {this.state.show ? (
          <div>
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.inputChangedHandler}
              required
            />
            <button onClick={this.clickedSend}>Enviar</button>
          </div>
        ) : (
          <div>
            <span>{this.state.name}</span>
            <button onClick={this.clickedClear}>Limpiar</button>
          </div>
        )}
      </div>
    );
  }
}
