import React, { Component } from "react";
import "./SortingVisual.css";

export default class SortingVisual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomIntInterval(5, 1000));
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;

    return (
      <>
        {array.map((value, id) => (
          <div className="array-bar" key={id}>
            {value}
          </div>
        ))}
      </>
    );
  }
}

function randomIntInterval(min, max) {
  // Include min and max from random numbers
  return Math.floor(Math.random() * (max - min + 1) + min);
}
