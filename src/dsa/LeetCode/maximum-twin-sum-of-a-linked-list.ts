function pairSum(head: ListNode | null): number {
  let slow = head;
  let fast = head;
  let pre: ListNode | null = null;
  while (fast && fast.next) {
    fast = fast.next.next;
    let temp = slow!.next;
    slow!.next = pre;
    pre = slow;
    slow = temp;
  }
  let max = 0;
  while (slow && pre) {
    max = Math.max(max, slow.val + pre.val);
    slow = slow.next;
    pre = pre.next;
  }
  return max;
}
