import { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="container text-center py-5">
        <h1>Counter</h1>
        <button className="btn btn-success m-2" onClick={this.increment}>
          Increment
        </button>
        <button className="btn btn-info m-2" onClick={this.reset}>
          Reset
        </button>
        <button className="btn btn-danger m-2" onClick={this.decrement}>
          Decrement
        </button>
        <h2 className="display-2">{this.state.count}</h2>
      </div>
    );
  }
}
