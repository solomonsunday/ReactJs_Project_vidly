import React, { Component } from "react";

class Genre extends Component {
  // state = { }
  render() {
    return (
      <ul class="list-group">
        <li className="list-group-item">All Genres</li>
        <li className="list-group-item">Action</li>
        <li className="list-group-item">Comedy</li>
        <li className="list-group-item">Thriller</li>
      </ul>
    );
  }
}

export default Genre;
