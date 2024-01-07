function minOperations(nums: number[]): number {
  let map = new Map();
  for (const num of nums) map.set(num, (map.get(num) || 0) + 1);
  let count = 0;
  for (const [_, val] of map) {
    if (val === 1) return -1;
    if (val >= 3) count += Math.trunc(val / 3);
    if (val % 3 !== 0) count++;
  }
  return count;
}
