import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  // duplicate code copied to HOC
  render() {
    const { name, count, incrementCount } = this.props;
    const { city, zip } = this.props.more;

    return (
      <button onClick={incrementCount}>
        {name} Clicked {count} times from {city} {zip}
      </button>
    );
  }
}

// HOC passing in ClickCounter
export default withCounter(ClickCounter, 5);
