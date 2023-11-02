class NodeRandom {
  val: number;
  next: NodeRandom | null;
  random: NodeRandom | null;
  constructor(val?: number, next?: NodeRandom, random?: NodeRandom) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: NodeRandom | null): NodeRandom | null {
  if (!head) {
    return null;
  }

  let map = new Map<NodeRandom | null, NodeRandom | null>();
  let curr = head;
  map.set(null, null);

  while (curr) {
    const copy = new NodeRandom(curr.val);
    map.set(curr, copy);
    curr = curr.next;
  }

  curr = head;

  while (curr) {
    let copy = map.get(curr);
    copy.next = map.get(curr.next);
    copy.random = map.get(curr.random);
    curr = curr.next;
  }

  return map.get(head);
}
