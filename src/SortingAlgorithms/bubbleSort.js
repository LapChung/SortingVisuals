export function bubbleSortAnimation(array) {
  const animationArray = [];
  const auxiliaryArray = array.slice();
  bubbleSort(auxiliaryArray, animationArray);

  return animationArray;
}

function bubbleSort(auxiliaryArray, animationArray) {
  const n = auxiliaryArray.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animationArray.push([j, j + 1]); // compare the two value and change the color
      animationArray.push([j, j + 1]); // revert their color
      if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
        // Swap the two values and change their color
        animationArray.push([j, auxiliaryArray[j + 1]]);
        animationArray.push([j + 1, auxiliaryArray[j]]);
        swap(auxiliaryArray, j, j + 1);
      } else {
        // Keep same color
        animationArray.push([-1, -1]);
        animationArray.push([-1, -1]);
      }
    }
  }
}

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
