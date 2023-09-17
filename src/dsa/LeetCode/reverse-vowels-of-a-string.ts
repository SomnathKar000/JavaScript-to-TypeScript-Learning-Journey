function reverseVowels(s: string): string {
  let l = 0,
    r = s.length - 1;
  let set = new Set("aeiou");
  while (l <= r) {
    if (!set.has(s[l])) l++;
    else if (!set.has(s[r])) r--;
    else {
      let temp = s[l];
      s.replace(s[l], s[r]);
      s.replace(s[r], temp);
      s.slice(l, r + 1);
      l++;
      r--;
    }
  }
  return s;
}
