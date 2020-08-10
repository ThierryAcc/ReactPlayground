import React from "react";

// HOC definition
// function which accepts an OriginalComponent (ClickCounter)
// Does stuff on the OriginalComponent and returns a NewComponent wrapping it
const UpdatedComponentHOC = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    // passing method and state to OriginalComponent (ClickCounter)
    render() {
      return (
        <OriginalComponent
          name="Vishwas"
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponentHOC;
