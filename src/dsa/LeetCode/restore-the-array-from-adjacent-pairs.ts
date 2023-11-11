function restoreArray(adjacentPairs: number[][]): number[] {
  let map = new Map<number, number[]>();
  for (const [a, b] of adjacentPairs) {
    if (!map.has(a)) map.set(a, []);
    if (!map.get(b)) map.set(b, []);
    map.get(a)?.push(b);
    map.get(b)?.push(a);
  }
  let result: number[] = [];
  for (const [node, neibors] of map) {
    if (neibors.length === 1) {
      result = [node, neibors[0]];
      break;
    }
  }
  while (result.length < adjacentPairs.length + 1) {
    const [prev, last] = [result[result.length - 2], result[result.length - 1]];
    const candidates = map.get(last)!;
    const nextElement = candidates[0] !== prev ? candidates[0] : candidates[1];
    result.push(nextElement);
  }
  return result;
}
