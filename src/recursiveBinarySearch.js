// How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.

//I hope this is what the assignment is looking for
const arr1 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
const arr2 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]

function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item === value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
};

binarySearch(arr1, 8);
// 0 10
// 0 4
// 3 4
// 3

binarySearch(arr2, 16);
// 0 10
// 6 10
// 6 7
// 7 7
// -1
