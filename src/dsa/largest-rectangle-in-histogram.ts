const heights = [2, 4];

function largestRectangleArea(heights: number[]): number {
  let result: number = 0;
  let stack: number[] = [];

  for (let i: number = 0; i <= heights.length; i++) {
    while (
      stack.length > 0 &&
      (i === heights.length || heights[i] < heights[stack[stack.length - 1]])
    ) {
      const height: number = heights[stack.pop()!];
      const width: number =
        stack.length > 0 ? i - stack[stack.length - 1] - 1 : i;
      const area: number = height * width;
      result = Math.max(result, area);
    }
    stack.push(i);
  }

  return result;
}

console.log(largestRectangleArea(heights));
