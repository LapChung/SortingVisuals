import React, { Component } from "react";
import "./SortingVisual.css";
import { mergeSortAnimation } from "../SortingAlgorithms/mergeSort.js";
import { bubbleSortAnimation } from "../SortingAlgorithms/bubbleSort.js";
import { quickSortAnimation } from "../SortingAlgorithms/quickSort.js";
import { selectionSortAnimation } from "../SortingAlgorithms/selectionSort.js";

window.onresize = function(event) {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let arrayBars = parseInt((width - 200) / 8);
  this.location.reload();
};

const ANIMATION_SPEED = 1;
const PRIMARY_COLOR = "turquoise";
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
    for (let i = 0; i < parseInt((window.innerWidth - 200) / 8); i++) {
      array.push(randomIntInterval(5, 500));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animationArray = mergeSortAnimation(this.state.array);

    for (let i = 0; i < animationArray.length; i++) {
      const arrayBar = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2; // Every 3 index is new set of animation
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

  selectionSort() {
    const animationArray = selectionSortAnimation(this.state.array);

    for (let i = 0; i < animationArray.length; i++) {
      const arrayBar = document.getElementsByClassName("array-bar");
      // Add an extra entry in array to determine the current smallest value
      const isColorChange =
        animationArray[i][0] === "isSmallestValue" ||
        animationArray[i][0] === "isNewSmallestValue?"; // We want to compare the current smallest value with the next index
      if (isColorChange) {
        const [smallestValue, barOneIndex, barTwoIndex] = animationArray[i];
        const barOneStyle = arrayBar[barOneIndex].style;
        const barTwoStyle = arrayBar[barTwoIndex].style;
        // Keep the smallest value the same color while incrementing until smaller value is found
        const color =
          animationArray[i][0] === "isSmallestValue"
            ? SECONDARY_COLOR
            : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [smallestValue, barOneIndex, newHeight] = animationArray[i];
          const barOneStyle = arrayBar[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED);
      }
    }
  }

  heapSort() {}

  quickSort() {
    const animationArray = quickSortAnimation(this.state.array);

    for (let i = 0; i < animationArray.length; i++) {
      const arrayBar = document.getElementsByClassName("array-bar");
      const isColorChange = i % 6 === 0 || i % 6 === 1; // every 6 index is a new set of animations
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animationArray[i];
        if (barOneIndex === -1) continue;
        const barOneStyle = arrayBar[barOneIndex].style;
        const barTwoStyle = arrayBar[barTwoIndex].style;
        const color = i % 6 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        const [barOneIndex, newHeight] = animationArray[i];
        if (barOneIndex === -1) continue;
        const barOneStyle = arrayBar[barOneIndex].style;
        setTimeout(() => {
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED);
      }
    }
  }

  bubbleSort() {
    const animationArray = bubbleSortAnimation(this.state.array);

    for (let i = 0; i < animationArray.length; i++) {
      const arrayBar = document.getElementsByClassName("array-bar");
      const isColorChange = i % 4 === 0 || i % 4 === 1; // every 4 index is a new set of animations
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
        if (barOneIndex === -1) continue;
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
      const quickSortArray = quickSortAnimation(array.slice());
      console.log(arraysAreEqual(jsSortedArray, quickSortArray));
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
        <div className="button-container">
          <button onClick={() => this.resetArray()}>Generate Array</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button onClick={() => this.selectionSort()}>Selection Sort</button>
          <button onClick={() => this.testAlgorithm()}>TEST!</button>
        </div>
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
