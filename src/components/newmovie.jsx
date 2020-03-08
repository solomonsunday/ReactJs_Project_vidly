import React, { Component } from "react";

class NewMovie extends Component {
  handleNewMovie = () => {
    this.props.history.push("/addmovie");
  };

  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={this.handleNewMovie}
        >
          New Movie
        </button>
      </div>
    );
  }
}

export default NewMovie;
