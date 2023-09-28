function sortArrayByParity(nums: number[]): number[] {
  let oddArr = nums.filter((e) => e % 2 === 1).sort((a, b) => a - b);
  let evenArr = nums.filter((e) => e % 2 === 0).sort((a, b) => a - b);
  return evenArr.concat(oddArr);
}
