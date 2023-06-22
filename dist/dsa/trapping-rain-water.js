"use strict";
let height2 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
function trap(height) {
    let result = 0;
    let leftArr = [];
    let rightArr = [];
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        max = Math.max(height[i], max);
        leftArr.push(max);
    }
    max = 0;
    for (let i = height.length - 1; i >= 0; i--) {
        max = Math.max(height[i], max);
        rightArr.unshift(max);
    }
    for (let i = 0; i < height.length; i++) {
        let temp = Math.min(leftArr[i], rightArr[i]) - height[i];
        if (temp >= 0) {
            result += temp;
        }
    }
    console.log(leftArr);
    console.log(rightArr);
    return result;
}
console.log(trap(height2));
//# sourceMappingURL=trapping-rain-water.js.map