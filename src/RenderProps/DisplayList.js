import React, { Component } from "react";

export default class DisplayList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.deps.map((departments) => (
            <li key={departments}>{departments}</li>
          ))}
        </ul>
      </div>
    );
  }
}
