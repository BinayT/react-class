import React from "react";

export default class FormCoordenadasComponent extends React.Component {
  state = {
    long: "",
    lat: "",
    showLoad: true,
    text: "CARGANDO...",
  };

  readLatLong = () => {
    const success = (pos) => {
      this.setState({
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
        showLoad: false,
      });
    };
    navigator.geolocation.getCurrentPosition(success);
  };
  closeLatLong = () => {
    this.setState({ showLoad: true, text: "GOING BACK..." });
    setTimeout(() => {
      this.setState({ text: "CARGANDO..." });
    }, 2000);
  };

  render() {
    let text = this.state.text;
    return (
      <div>
        {this.state.showLoad ? (
          `${text}`
        ) : (
          <div>
            <h1>Latitude: {this.state.lat}</h1>
            <h1>Longitude: {this.state.long}</h1>
          </div>
        )}
        <br />
        <button onClick={this.readLatLong}>Leer</button>
        <button onClick={this.closeLatLong}>Cerrar</button>
      </div>
    );
  }
}
