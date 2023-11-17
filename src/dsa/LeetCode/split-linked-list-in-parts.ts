function splitListToParts(
  head: ListNode | null,
  k: number
): Array<ListNode | null> {
  let len = 0;
  let curr = head;
  while (curr) {
    len++;
    curr = curr.next;
  }

  let devide = Math.floor(len / k);
  let extra = len % k;

  let arr: (ListNode | null)[] = [];
  curr = head;

  while (arr.length < k) {
    arr.push(curr);
    let currentSize = devide + (extra-- > 0 ? 1 : 0);

    for (let i = 0; i < currentSize - 1; i++) {
      if (curr === null) break;
      curr = curr.next;
    }

    if (curr) {
      let temp = curr.next;
      curr.next = null;
      curr = temp;
    }
  }

  return arr;
}
