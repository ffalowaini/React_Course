import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"],
  // };
  render() {
    return (
      <div>
        {/* <ul>{this.formatCount()}</ul> */}
        <h4>Title: #{this.props.counter.id}</h4>
        <span>{this.props.counter.value}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter.id)} className="btn btn-primary">
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // formatCount() {
  //   if (this.state.tags.length === 0) return <p>There is no tags</p>;
  //   else return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  // }

  // increment = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };
}

export default Counter;
