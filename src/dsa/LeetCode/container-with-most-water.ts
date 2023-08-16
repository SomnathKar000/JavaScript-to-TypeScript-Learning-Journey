// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

let height: number[] = [2, 3, 4, 5, 18, 17, 6];

var maxArea = function (height: number[]): number {
  let result: number = 0;
  let left: number = 0;
  let right: number = height.length - 1;

  while (left < right) {
    let temp: number = Math.min(height[left], height[right]) * (right - left);
    result = Math.max(result, temp);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};

console.log(maxArea(height));
