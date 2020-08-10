import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  // duplicate increment code copied to HOC
  render() {
    const { name, count, incrementCount } = this.props;
    return (
      <h4 onMouseOver={incrementCount}>
        {name} Clicked {count} times
      </h4>
    );
  }
}

export default withCounter(HoverCounter, 11);
