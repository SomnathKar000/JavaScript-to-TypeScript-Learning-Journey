"use strict";
let height = [2, 3, 4, 5, 18, 17, 6];
var maxArea = function (height) {
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let temp = Math.min(height[left], height[right]) * (right - left);
        result = Math.max(result, temp);
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return result;
};
console.log(maxArea(height));
//# sourceMappingURL=container-with-most-water.js.map