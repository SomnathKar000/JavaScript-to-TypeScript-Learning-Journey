function romanToInt(s: string): number {
  let values: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total: number = 0;
  let i = s.length - 1;
  while (i >= 0) {
    if (
      (s[i] == "V" && s[i - 1] === "I") ||
      (s[i] === "X" && s[i - 1] === "I")
    ) {
      total = total + values[s[i]] - 1;
      i--;
    } else if (
      (s[i] == "C" && s[i - 1] === "X") ||
      (s[i] === "L" && s[i - 1] === "X")
    ) {
      total = total + values[s[i]] - 10;
      i--;
    } else if (
      (s[i] == "D" && s[i - 1] === "C") ||
      (s[i] === "M" && s[i - 1] === "C")
    ) {
      total = total + values[s[i]] - 100;
      i--;
    } else {
      total += values[s[i]];
    }
    i--;
  }
  return total;
}
