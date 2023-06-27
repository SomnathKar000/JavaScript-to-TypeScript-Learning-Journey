"use strict";
const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
];
const target = 3;
function searchMatrix(matrix, target) {
    let array = [];
    let left = 0;
    let right = matrix.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let tempArray = matrix[mid];
        if (tempArray[0] <= target && tempArray[tempArray.length - 1] >= target) {
            array = tempArray;
            break;
        }
        else if (tempArray[0] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    if (array.length === 0) {
        return false;
    }
    left = 0;
    right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return true;
        }
        else if (array[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return false;
}
console.log(searchMatrix(matrix, target));
//# sourceMappingURL=search-a-2d-matrix.js.map