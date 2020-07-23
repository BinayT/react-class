import React, { Component } from "react";

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: this.props.movieList,
    };
  }
  render() {
    console.log(this.state.movieList);
    return (
      <div className="row">
        {this.state.movieList.map((el) => {
          return (
            <div
              key={el.imdbID}
              className="card col-md-4 col-sm-6"
              style={{ width: "18rem", marginTop: "15px" }}
            >
              <img
                className="card-img-top"
                src={el.Poster}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{el.Title}</h5>
                <p className="card-text">Year: {el.Year}</p>
                <a href="#" className="btn btn-primary">
                  {el.Type}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
