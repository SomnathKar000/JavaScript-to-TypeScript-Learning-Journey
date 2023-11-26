function getSumAbsoluteDifferences(nums: number[]): number[] {
  let total = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  let res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let rightSum = total - nums[i] - leftSum;

    const leftSize = i;
    const rightSize = nums.length - i - 1;

    res.push(rightSum - nums[i] * rightSize + (nums[i] * leftSize - leftSum));

    leftSum += nums[i];
  }
  return res;
}
