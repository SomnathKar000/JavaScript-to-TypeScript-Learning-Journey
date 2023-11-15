function insertionSortList(head: ListNode | null): ListNode | null {
  let array = [];
  while (head) {
    array.push(head);
    head = head.next;
  }
  array.sort((a, b) => a.val - b.val);
  for (let i = 0; i < array.length; i++) array[i].next = array[i + 1] || null;
  return array[0];
}
