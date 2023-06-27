const matrix: number[][] = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target: number = 3;

function searchMatrix(matrix: number[][], target: number): any {
  let array: number[] = [];
  let left: number = 0;
  let right: number = matrix.length - 1;
  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);
    let tempArray: number[] = matrix[mid];
    if (tempArray[0] <= target && tempArray[tempArray.length - 1] >= target) {
      array = tempArray;
      break;
    } else if (tempArray[0] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (array.length === 0) {
    return false;
  }
  left = 0;
  right = array.length - 1;
  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return true;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}
console.log(searchMatrix(matrix, target));
