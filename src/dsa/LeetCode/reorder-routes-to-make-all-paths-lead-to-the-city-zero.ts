function minReorder(n: number, connections: number[][]): number {
  let map = new Map([[0, 0]]);
  const calculate = (path: number[][]): number => {
    let extra: number[][] = [];
    let ans = 0;
    for (const [from, to] of path) {
      if (map.has(from)) {
        ans++;
        map.set(to, from);
      } else if (map.has(to)) map.set(from, to);
      else extra.push([from, to]);
    }
    if (path.length - extra.length < 2) {
      extra.reverse();
    }
    return extra.length ? ans + calculate(extra) : ans;
  };
  return calculate(connections);
}
