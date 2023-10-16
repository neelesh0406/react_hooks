import React, { Component } from "react";

export default class CounterDisplay extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.props.count) {
      console.log("Component updated : ", prevProps, this.props);
    }
  }

  componentDidMount() {
    console.log("Component mounted");
    localStorage.setItem("show-counter", "true");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
    localStorage.removeItem("show-counter");
  }

  render() {
    return <div>Counter Display : {this.props.count}</div>;
  }
}
