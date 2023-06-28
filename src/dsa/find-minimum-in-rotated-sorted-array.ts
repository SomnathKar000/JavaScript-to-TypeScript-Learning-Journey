let nums: number[] = [3, 4, 5, 1, 2];

function findMin(nums: number[]): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left < right) {
    let mid: number = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

console.log(findMin(nums));
