function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  potions = potions.sort((a, b) => a - b);
  let arr: number[] = [];
  for (const s of spells) {
    let l = 0,
      r = potions.length - 1,
      count = 0;
    while (l <= r) {
      const mid = Math.floor((r + l) / 2);
      if (potions[mid] * s >= success) {
        count = potions.length - mid;
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    arr.push(count);
  }
  return arr;
}
