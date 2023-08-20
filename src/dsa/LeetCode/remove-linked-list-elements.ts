function removeElements(head: ListNode | null, val: number): ListNode | null {
  let dummyPtr = new ListNode();
  dummyPtr.next = head;
  let current = dummyPtr;

  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummyPtr.next;
}
