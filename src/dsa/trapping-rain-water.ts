//Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

let height2: number[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

function trap(height: number[]): number {
  let result: number = 0;
  let leftArr: number[] = [];
  let rightArr: number[] = [];
  // for left side
  let max: number = 0;
  for (let i: number = 0; i < height.length; i++) {
    max = Math.max(height[i], max);
    leftArr.push(max);
  }
  max = 0;
  // for right side
  for (let i: number = height.length - 1; i >= 0; i--) {
    max = Math.max(height[i], max);
    rightArr.unshift(max);
  }

  // trapped rain water value

  for (let i: number = 0; i < height.length; i++) {
    let temp: number = Math.min(leftArr[i], rightArr[i]) - height[i];
    if (temp >= 0) {
      result += temp;
    }
  }
  console.log(leftArr);
  console.log(rightArr);
  return result;
}

console.log(trap(height2));
