function canVisitAllRooms(rooms: number[][]): boolean {
  let set = new Set();
  set.add(0);
  let stack: number[] = [0];
  while (stack.length) {
    let keys = rooms[stack.pop()!];
    for (const key of keys) {
      if (!set.has(key)) {
        set.add(key);
        stack.push(key);
      }
    }
  }
  return set.size === rooms.length;
}
