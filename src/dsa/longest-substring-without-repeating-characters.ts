let s2: string = "pwwkew";

function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) {
    return 1;
  }

  let count: number = 0;
  let max: number = 0;
  let set: Set<string> = new Set();
  let start: number = 0;

  for (let i: number = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      while (set.has(s[i])) {
        set.delete(s[start]);
        start++;
      }
    }
    set.add(s[i]);
    count = i - start + 1;
    max = Math.max(count, max);
  }

  return max;
}

console.log(lengthOfLongestSubstring(s2));
