function characterReplacement(s: string, k: number): number {
  let max: number = 0;
  let l: number = 0,
    r: number = 0;
  let map = new Map<string, number>();
  let maxChar = 0;

  while (r < s.length) {
    let charR = s[r];
    map.set(charR, (map.get(charR) || 0) + 1);
    maxChar = Math.max(maxChar, map.get(charR)!);
    if (r - l + 1 - maxChar > k) {
      let v = map.get(s[l])!;
      map.set(s[l], v - 1);
      l++;
    }
    max = Math.max(r - l + 1, max);
    r++;
  }
  return max;
}
