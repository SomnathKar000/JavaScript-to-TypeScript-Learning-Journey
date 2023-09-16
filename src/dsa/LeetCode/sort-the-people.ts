function sortPeople(names: string[], heights: number[]): string[] {
  let map = new Map<number, string>();
  for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i]);
  }
  heights = heights.sort((a, b) => b - a);
  let arr: string[] = [];
  for (const h of heights) {
    arr.push(map.get(h)!);
  }
  return arr;
}
