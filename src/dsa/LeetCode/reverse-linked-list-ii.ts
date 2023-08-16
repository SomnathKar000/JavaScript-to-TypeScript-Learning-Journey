function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let i = 1;
  let pre: ListNode | null = null;
  let current: ListNode | null = head;

  while (current !== null && i < left) {
    pre = current;
    current = current.next;
    i++;
  }
  let beforeLeft: ListNode | null = pre;
  let leftNode: ListNode | null = current;

  while (current !== null && i <= right) {
    let nextNode = current.next;
    current.next = pre;
    pre = current;
    current = nextNode;
    i++;
  }
  if (beforeLeft) {
    beforeLeft.next = pre;
  } else {
    head = pre;
  }
  leftNode!.next = current;
  return head;
}
