/**
 * @param searchList {array}
 * @param value {number}
 * @returns {array}
 */

function binarySearch(searchList, value) {
  let left = 0
  let right = searchList.length - 1
  let middle = Math.floor(right / 2)
  let arrayPath = [];
  if (searchList[middle] === value) {
    arrayPath.push(searchList[middle])
    return arrayPath
  }
  while (searchList[middle] !== value) {
    middle = Math.floor((right - left) / 2) + left
    if (right < left) {
      return 'Value Not Found';
    }
    if (searchList[middle] < value) {
      left = middle + 1
      arrayPath.push(searchList[middle])
    } else {
      right = middle - 1
      arrayPath.push(searchList[middle])
    }
  }
  return arrayPath
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];

binarySearch(testArray, 1)