function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let abs: number = nums.length;
  let map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      abs = Math.min(abs, i - map.get(nums[i])!);
    }
    map.set(nums[i], i);
  }

  console.log(map, abs);
  return abs <= k;
}
