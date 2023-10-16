import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterDisplay1 from "./CounterDisplay1";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("Class component mounted");
  }

  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        {/* {this.state.count < 2 && <CounterDisplay count={this.state.count} />} */}
        {this.state.count < 2 && <CounterDisplay1 count={this.state.count} />}
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
