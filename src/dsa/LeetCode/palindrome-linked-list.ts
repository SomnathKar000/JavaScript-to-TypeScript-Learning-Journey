function isPalindrome(head: ListNode | null): boolean {
  let fast = head;
  let mid = head;
  // Find the middle
  while (fast && fast.next) {
    fast = fast.next.next;
    mid = mid!.next;
  }
  // Reverse secode half
  let pre: ListNode | null = null;
  while (mid) {
    let temp = mid.next;
    mid.next = pre;
    pre = mid;
    mid = temp;
  }
  // Compare
  while (pre) {
    if (pre.val !== head!.val) return false;
    head = head!.next;
    pre = pre.next;
  }
  return true;
}
