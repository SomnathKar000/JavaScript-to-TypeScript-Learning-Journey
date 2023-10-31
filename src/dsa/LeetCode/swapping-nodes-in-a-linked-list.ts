function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let n = 1,
    temp: ListNode | null = head;
  while (temp) {
    n++;
    temp = temp.next;
  }
  let l = n - k;
  if (k > n / 2) [k, l] = [l, k];
  let first = head;
  let second = head;
  n = 1;
  while (first && n !== k) {
    first = first.next;
    n++;
  }
  second = first;
  while (first && n !== l) {
    first = first.next;
    n++;
  }
  let t = first!.val;
  first!.val = second!.val;
  second!.val = t;
  return head;
}
