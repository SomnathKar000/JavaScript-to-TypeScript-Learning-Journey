function destCity(paths: string[][]): string {
  let graph = new Map<string, string>();
  for (let i = 0; i < paths.length; i++) {
    graph.set(paths[i][0], paths[i][1]);
  }
  let city = paths[0][0];
  while (graph.get(city) !== undefined) city = graph.get(city)!;

  return city;
}
