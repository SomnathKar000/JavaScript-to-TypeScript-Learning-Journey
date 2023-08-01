function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current !== null) {
    let nextNode: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}
