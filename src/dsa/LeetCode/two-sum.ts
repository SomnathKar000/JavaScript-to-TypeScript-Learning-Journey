function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let n = target - nums[i];
    if (map.has(n)) {
      return [i, map.get(n)!];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}
