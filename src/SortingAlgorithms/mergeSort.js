// export const mergeSort = array => {
//   if (array.length === 1) {
//     return array;
//   }

//   const middleIndex = Math.floor(array.length / 2); // find middle value
//   const leftArray = mergeSort(array.slice(0, middleIndex)); // Recursion to split left half until 1 value remains
//   const rightArray = mergeSort(array.slice(middleIndex)); // Recursion to split right half until 1 value remains

//   const sortedArray = [];

//   let leftIndex = 0,
//     rightIndex = 0;

//   while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
//     if (leftArray[leftIndex] < rightArray[rightIndex]) {
//       // Compares left value and right value and pushes lower value to new array
//       sortedArray.push(leftArray[leftIndex]);
//       leftIndex++;
//     } else {
//       sortedArray.push(rightArray[rightIndex]);
//       rightIndex++;
//     }
//   }

//   while (leftIndex < leftArray.length) {
//     // pushes leftover values to array from left half
//     sortedArray.push(leftArray[leftIndex++]);
//   }
//   while (rightIndex < rightArray.length) {
//     // pushes leftover values to array from right half
//     sortedArray.push(rightArray[rightIndex++]);
//   }

//   return sortedArray;
// };

export function mergeSortAnimation(array) {
  const animationArray = [];
  const auxiliaryArray = array.slice();

  if (array.length <= 1) {
    return array;
  }
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animationArray);
  return animationArray;
}

function mergeSortHelper(
  array,
  startIndex,
  endIndex,
  auxiliaryArray,
  animationArray
) {
  if (startIndex === endIndex) return;
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  mergeSortHelper(
    auxiliaryArray,
    startIndex,
    middleIndex,
    array,
    animationArray
  );
  mergeSortHelper(
    auxiliaryArray,
    middleIndex + 1,
    endIndex,
    array,
    animationArray
  );
  doMerge(
    array,
    startIndex,
    middleIndex,
    endIndex,
    auxiliaryArray,
    animationArray
  );
}

function doMerge(
  array,
  startIndex,
  middleIndex,
  endIndex,
  auxiliaryArray,
  animationArray
) {
  let i = startIndex,
    k = startIndex,
    j = middleIndex + 1;

  while (i <= middleIndex && j <= endIndex) {
    animationArray.push([i, j]); // Comparing value and pushing them to change their color\
    //console.log(i);
    animationArray.push([i, j]); // Comparing value and pushing them again to revert their color
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animationArray.push([k, auxiliaryArray[i]]);
      array[k++] = auxiliaryArray[i++]; // Overwrite index k value in original array with index i value in auxiliary array
    } else {
      animationArray.push([k, auxiliaryArray[j]]);
      array[k++] = auxiliaryArray[j++];
    }
  }

  while (i <= middleIndex) {
    animationArray.push([i, i]);
    animationArray.push([i, i]);

    animationArray.push([k, auxiliaryArray[i]]);
    array[k++] = auxiliaryArray[i++];
  }

  while (j <= endIndex) {
    animationArray.push([j, j]);
    animationArray.push([j, j]);

    animationArray.push([k, auxiliaryArray[j]]);
    array[k++] = auxiliaryArray[j++];
  }
}
