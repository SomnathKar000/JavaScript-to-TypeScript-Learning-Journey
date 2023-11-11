function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  if (source === destination) return true;
  let map = new Map<number, number[]>();
  for (const [a, b] of edges) {
    if (!map.get(a)) map.set(a, []);
    if (!map.get(b)) map.set(b, []);
    map.get(a)?.push(b);
    map.get(b)?.push(a);
  }
  return hasPath(map, source, destination, new Set());
}

function hasPath(
  map: Map<number, number[]>,
  src: number,
  des: number,
  set: Set<number>
): boolean {
  if (src === des) return true;
  if (set.has(src)) return false;

  set.add(src);

  for (const num of map.get(src)!) if (hasPath(map, num, des, set)) return true;
  return false;
}
