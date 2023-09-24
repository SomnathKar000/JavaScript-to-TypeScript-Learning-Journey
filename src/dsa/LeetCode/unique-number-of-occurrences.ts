function uniqueOccurrences(arr: number[]): boolean {
  let map = new Map<number, number>();
  for (const n of arr) map.set(n, (map.get(n) || 0) + 1);
  const set = new Set();
  for (const n of map.values()) {
    if (set.has(n)) return false;
    set.add(n);
  }
  return true;
}
