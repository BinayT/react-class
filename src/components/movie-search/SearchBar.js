import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

export default class SearchBar extends React.Component {
  state = {
    userInput: "",
    itemsMovie: [],
  };

  inputChangedHandler = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  searchMovie = async () => {
    await axios
      .get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=1fe8cf44&s=${this.state.userInput}`
      )
      .then((list) => this.setState({ itemsMovie: list.data.Search }))
      .then(() => console.log(this.state.itemsMovie));
  };

  render() {
    return (
      <div className="container">
        <div>
          <input
            type="text"
            value={this.state.userInput}
            name="userInput"
            onChange={this.inputChangedHandler}
          />
          <button
            onClick={
              this.state.userInput.length > 0
                ? this.searchMovie
                : () => alert("Please write something")
            }
          >
            Search
          </button>
        </div>
        <br />
        {this.state.itemsMovie.length > 0 ? (
          <MovieCard movieList={this.state.itemsMovie} />
        ) : null}
      </div>
    );
  }
}
