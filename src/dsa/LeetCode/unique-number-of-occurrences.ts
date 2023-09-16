function uniqueOccurrences(arr: number[]): boolean {
  let set = new Set<number>();
  for (const n of arr) {
    if (set.has(n)) return true;
    else set.add(n);
  }
  return false;
}
