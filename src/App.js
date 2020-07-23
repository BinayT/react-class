import React from "react";
/* import MouseMove from "./MouseMove";
import Form from "./forms/forms.js"; */

/* import FormCoordenadasComponent from "./components/forms/formCoordenadasComponent";
import FormNameComponent from "./components/forms/formNameComponent"; */

import SearchBar from "./components/movie-search/SearchBar";

export default class App extends React.Component {
  state = {
    showForm: false,
    showCords: false,
  };

  showForm = () => {
    this.setState({ showForm: !this.state.showForm, showCords: false });
  };

  showCords = () => {
    this.setState({ showCords: !this.state.showCords, showForm: false });
  };

  render() {
    return (
      <>
        <SearchBar />
        {/* <div>
          <button onClick={this.showForm}>Formulario</button>
          <button onClick={this.showCords}>Coordenadas</button>
        </div>
        {this.state.showForm ? <FormNameComponent /> : null}
        {this.state.showCords ? <FormCoordenadasComponent /> : null} */}
      </>
    );
  }
}
