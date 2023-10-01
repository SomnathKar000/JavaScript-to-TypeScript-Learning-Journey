function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null || head.next.next === null)
    return head;

  let odd: ListNode | null = head;
  let even: ListNode | null = head.next;
  let evenHead: ListNode | null = even;

  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
}
