function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let list: ListNode = new ListNode();
  let temp: ListNode = list;
  while (list1 !== null && list2 !== null) {
    if (list1.val >= list2.val) {
      temp.next = list2;
      list2 = list2.next;
    } else {
      temp.next = list1;
      list1 = list1.next;
    }
    temp = temp.next;
  }
  if (list1 !== null) {
    temp.next = list1;
  } else if (list2 !== null) {
    temp.next = list2;
  }
  return list.next;
}
