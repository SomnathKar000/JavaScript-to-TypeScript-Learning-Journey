function find132pattern(nums: number[]): boolean {
  let stack: [number, number][] = [];
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    min = Math.min(nums[i], min);
    while (stack.length > 0 && nums[i] >= stack[stack.length - 1][0])
      stack.pop();
    if (stack.length > 0 && stack[stack.length - 1][1] < nums[i]) return true;
    stack.push([nums[i], min]);
  }
  return false;
}
