import React, { Component } from "react";
import "./SortingVisual.css";
import { mergeSortAnimation } from "../SortingAlgorithms/mergeSort.js";
import { bubbleSortAnimation } from "../SortingAlgorithms/bubbleSort.js";

const ANIMATION_SPEED = 10;
const PRIMARY_COLOR = "orange";
const SECONDARY_COLOR = "black";

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
      array.push(randomIntInterval(5, 500));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animationArray = mergeSortAnimation(this.state.array);

    for (let i = 0; i < animationArray.length; i++) {
      const arrayBar = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animationArray[i];
        const barOneStyle = arrayBar[barOneIndex].style;
        const barTwoStyle = arrayBar[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animationArray[i];
          const barOneStyle = arrayBar[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED);
      }
    }
  }

  heapSort() {}

  quickSort() {}

  bubbleSort() {
    const animationArray = bubbleSortAnimation(this.state.array);

    for (let i = 0; i < animationArray.length; i++) {
      const arrayBar = document.getElementsByClassName("array-bar");
      const isColorChange = i % 4 === 0 || i % 4 === 1;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animationArray[i];
        const barOneStyle = arrayBar[barOneIndex].style;
        const barTwoStyle = arrayBar[barTwoIndex].style;
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        const [barOneIndex, newHeight] = animationArray[i];
        if (barOneIndex === -1) {
          continue;
        }
        const barOneStyle = arrayBar[barOneIndex].style;
        setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED);
      }
    }
  }

  testAlgorithm() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      for (let i = 0; i < 200; i++) {
        array.push(randomIntInterval(1, 1000));
      }
      const jsSortedArray = array.slice().sort((a, b) => a - b);
      const bubbleSortArray = bubbleSortAnimation(array.slice());
      console.log(arraysAreEqual(jsSortedArray, bubbleSortArray));
    }
  }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        {array.map((value, id) => (
          <div
            className="array-bar"
            key={id}
            style={{ height: `${value}px` }}
          ></div>
        ))}
        <button onClick={() => this.resetArray()}>Generate Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.testAlgorithm()}>TEST!</button>
      </div>
    );
  }
}

function randomIntInterval(min, max) {
  // Include min and max from random numbers
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
