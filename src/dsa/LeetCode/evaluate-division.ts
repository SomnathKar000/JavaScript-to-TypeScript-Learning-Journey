function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  let map = new Map<string, [string, number][]>();
  for (const [i, [a, b]] of equations.entries()) {
    map.set(a, [...(map.get(a) ?? []), [b, values[i]]]);
    map.set(b, [...(map.get(b) ?? []), [a, 1 / values[i]]]);
  }
  function bfs([a, b]: string[]): number {
    if (!map.has(a) || !map.has(b)) return -1;
    let q: [string, number][] = [],
      visit = new Set<string>();
    q.push([a, 1]);
    visit.add(a);
    while (q.length) {
      const [n, w] = q.shift()!;
      if (n === b) return w;
      for (const [nei, weight] of map.get(n)!) {
        if (!visit.has(nei)) {
          let num = w * weight;
          q.push([nei, num]);
          visit.add(nei);
        }
      }
    }

    return -1;
  }
  return queries.map((element) => bfs(element));
}
