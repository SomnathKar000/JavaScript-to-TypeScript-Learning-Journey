function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null || head.next == null) {
    return head;
  }
  let temp: ListNode | null = head;
  while (temp.next != null) {
    let nextNode: ListNode | null = temp.next;
    if (nextNode.val === temp.val) {
      temp.next = nextNode.next;
    } else {
      temp = nextNode;
    }
  }
  return head;
}
