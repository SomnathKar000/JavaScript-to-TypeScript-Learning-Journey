function countHomogenous(s: string): number {
  const MOD = 1e9 + 7;
  let count = 0,
    j = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[j] === s[i]) {
      count += i - j + 1;
    } else {
      count++;
      j = i;
    }
  }
  return count % MOD;
}
