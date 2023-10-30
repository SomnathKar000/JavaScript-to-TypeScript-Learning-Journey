function sortByBits(arr: number[]): number[] {
  function countSetBits(num: number): number {
    let count = 0;
    while (num > 0) {
      count += num & 1;
      num >>= 1;
    }
    return count;
  }

  return arr.sort((a, b) => {
    const countA = countSetBits(a);
    const countB = countSetBits(b);
    if (countA === countB) return a - b;
    else return countA - countB;
  });
}
