function deleteMiddle(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let pre: ListNode | null = null;
  while (fast && fast.next) {
    fast = fast.next.next;
    pre = slow;
    slow = slow!.next;
  }
  if (!pre) return null;
  else pre.next = slow!.next;
  return head;
}
