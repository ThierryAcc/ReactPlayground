import React from "react";

// HOC definition
// function which accepts an WrappedComponent (ClickCounter)
// Does stuff on the WrappedComponent and returns a NewComponent wrapping it
const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    // passing method and state to WrappedComponent (ClickCounter)
    render() {
      return (
        <WrappedComponent
          name="Vishwas"
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
