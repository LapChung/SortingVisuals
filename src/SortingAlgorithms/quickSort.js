export function quickSortAnimation(array) {
  const animationArray = [];
  if (array.length <= 1) {
    return array;
  }
  quickSort(array, 0, array.length - 1, animationArray);

  return animationArray;
}
function quickSort(array, startIndex, endIndex, animationArray) {
  if (startIndex < endIndex) {
    let pivotIndex = partition(array, startIndex, endIndex, animationArray);

    quickSort(array, startIndex, pivotIndex - 1, animationArray);
    quickSort(array, pivotIndex + 1, endIndex, animationArray);
  }
}

function partition(array, startIndex, endIndex, animationArray) {
  // Using last element as the pivot
  let pivot = array[endIndex];

  let partitionIndex = startIndex;

  for (let j = startIndex; j <= endIndex - 1; j++) {
    // Comparing values with last element
    animationArray.push([j, endIndex]);
    animationArray.push([j, endIndex]);
    if (array[j] <= pivot) {
      animationArray.push([j, array[partitionIndex]]);
      animationArray.push([partitionIndex, array[j]]);
      swap(array, partitionIndex, j);
      partitionIndex++;
    } else {
      // No change occurs
      animationArray.push([-1, -1]);
      animationArray.push([-1, -1]);
    }
    animationArray.push([-1, -1]);
    animationArray.push([-1, -1]);
  }
  animationArray.push([-1, -1]);
  animationArray.push([-1, -1]);
  animationArray.push([-1, -1]);
  animationArray.push([-1, -1]);

  animationArray.push([partitionIndex, array[endIndex]]);
  animationArray.push([endIndex, array[partitionIndex]]);
  swap(array, partitionIndex, endIndex);

  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
