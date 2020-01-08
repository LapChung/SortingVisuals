export function selectionSortAnimation(array) {
  const animationArray = [];
  if (array.length <= 1) {
    return array;
  }
  selectionSort(array, animationArray);

  return animationArray;
}

function selectionSort(array, animationArray) {
  for (let i = 0; i < array.length - 1; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      // Compare j and minimumIndex value and change their color/revert
      animationArray.push(["isSmallestValue", j, minimumIndex]);
      animationArray.push(["isNewSmallestValue?", j, minimumIndex]);
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    // Swap the two values
    animationArray.push(["swap", i, array[minimumIndex]]);
    animationArray.push(["swap", minimumIndex, array[i]]);
    swap(array, i, minimumIndex);
  }
}

function swap(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
