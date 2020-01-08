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
  let pivot = array[endIndex];

  let i = startIndex - 1;

  for (let j = startIndex; j < endIndex; j++) {
    if (array[j] < pivot) {
      animationArray.push([j, array[i]]);
      animationArray.push([i, array[j]]);
      i++;
      swap(array, i, j);
    } else {
      // No change occurs
      animationArray.push([-1, -1]);
      animationArray.push([-1, -1]);
    }
  }
  console.log(animationArray);
  animationArray.push([i, array[endIndex]]);
  animationArray.push([endIndex, array[i]]);
  swap(array, i + 1, endIndex);

  return i + 1;
}

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
