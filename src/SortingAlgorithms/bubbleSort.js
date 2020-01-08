export function bubbleSortAnimation(array) {
  const animationArray = [];
  if (array.length <= 1) {
    return array;
  }
  bubbleSort(array, animationArray);

  return animationArray;
}

function bubbleSort(array, animationArray) {
  const n = array.length;

  let swapped;
  do {
    swapped = false;
    for (let j = 0; j < n - 1; j++) {
      animationArray.push([j, j + 1]); // compare the two value and change the color
      animationArray.push([j, j + 1]); // revert their color

      if (array[j] > array[j + 1]) {
        // Swap the two values and change their color
        animationArray.push([j, array[j + 1]]);
        animationArray.push([j + 1, array[j]]);
        swap(array, j, j + 1);
        swapped = true;
      } else {
        // No change occurs
        animationArray.push([-1, -1]);
        animationArray.push([-1, -1]);
      }
    }
  } while (swapped);
}

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
