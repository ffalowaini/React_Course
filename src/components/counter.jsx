import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };
  render() {
    return (
      <div>
        <ul>{this.formatCount()}</ul>
        <span>{this.state.count}</span>
        <button onClick={this.increment} className="btn btn-primary">Increment</button>
      </div>
    );
  }

  formatCount() {
    if (this.state.tags.length === 0) return <p>There is no tags</p>;
    else return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  increment = () => {
      console.log('hi', this)
      this.setState({count: this.state.count + 1})
  }
}

export default Counter;
