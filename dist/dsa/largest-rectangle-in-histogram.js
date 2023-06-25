"use strict";
const heights = [2, 4];
function largestRectangleArea(heights) {
    let result = 0;
    let stack = [];
    for (let i = 0; i <= heights.length; i++) {
        while (stack.length > 0 &&
            (i === heights.length || heights[i] < heights[stack[stack.length - 1]])) {
            const height = heights[stack.pop()];
            const width = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i;
            const area = height * width;
            result = Math.max(result, area);
        }
        stack.push(i);
    }
    return result;
}
console.log(largestRectangleArea(heights));
//# sourceMappingURL=largest-rectangle-in-histogram.js.map