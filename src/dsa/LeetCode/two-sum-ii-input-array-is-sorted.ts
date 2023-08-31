function twoSum2(numbers: number[], target: number): number[] {
  let map = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    let n = target - numbers[i];
    if (map.has(n)) {
      return [map.get(n)!, i + 1];
    } else {
      map.set(numbers[i], i + 1);
    }
  }
  return [];
}
