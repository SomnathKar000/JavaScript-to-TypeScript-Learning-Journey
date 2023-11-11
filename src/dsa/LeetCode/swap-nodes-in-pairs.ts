function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let dummy = new ListNode();
  dummy.next = head;
  let curr = dummy;
  while (curr.next && curr.next.next) {
    let temp1 = curr.next.next;
    let temp2 = curr.next;
    curr.next = temp1;
    temp2.next = temp1.next;
    temp1.next = temp2;
    curr = curr.next.next!;
  }
  return dummy.next;
}
