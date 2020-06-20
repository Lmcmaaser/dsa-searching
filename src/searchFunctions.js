// linear search looks through an array 1-by-1 until you find what you are looking for
// loop through an array, checking each value until you find a value that matches. At that point, you return i, the index that you are currently on. If you reach the end of the loop without finding the item then you return -1, indicating that the item wasn't found.
// time complexity:
  // - best case = O(1) (when the value is at the start of the array)
  // - worst/average case = O(n) (value does not exist or is in center of array)
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
          return i;
      }
  }
  return -1;
};

// Binary search is a faster than the linear method, only works on sorted arrays
// divide and conquer approach

// function takes 4 arguments - the array, the value to search for, and optional start and end indices.
// time complexity:
  // - best case: O(1) (the item you are looking for is in the middle of the array)
  // - average/worst case: O(log(n)) (With each iteration, you can cut the area you have to search in half)

function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;
  // if start and end are not passed, the function uses the start and end of the array
  if (start > end) {
    return -1;
  } // If the start index is greater than the end index then clearly the value hasn't been found so you return -1

  const index = Math.floor((start + end) / 2);
  const item = array[index]; // pick an index in the middle of the start and end indices and check the item at that index

  console.log(start, end);
  if (item === value) {
    return index; // If the item is equal to the value then you have found the correct index
    // recursively search either the left half or right half of the sorted array, depending on whether the item was less than or greater than the value
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
};

// module.exports = {
//   indexOf,
//   binarySearch
// };
