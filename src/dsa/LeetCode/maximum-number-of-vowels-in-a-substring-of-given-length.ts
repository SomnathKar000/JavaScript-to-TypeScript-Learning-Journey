function maxVowels(s: string, k: number): number {
  let count = 0,
    l = 0,
    r = 0;
  let max = 0;
  let set = new Set(...["aeiou"]);
  while (r < s.length) {
    if (set.has(s[r])) {
      count++;
    }
    if (r - l === k) {
      if (set.has(s[l])) {
        count--;
      }
      l++;
    }
    max = Math.max(count, max);
    r++;
  }
  return max;
}
