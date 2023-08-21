// Delete first node
const deleteFirst = (): void => {
  if (head === null) {
    return;
  }
  head = head.next;
};

// Delete last node
const deleteLast = (): void => {
  if (head === null) {
    return;
  }
  if (head.next === null) {
    head = null;
    return;
  }
  let secondLast: ListNode | null = head;
  let last: ListNode | null = head.next;
  while (last.next !== null && secondLast.next) {
    last = last.next;
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

// Remove all nodes with a specific value

const removeElementsByValue = (value: number): void => {
  let dummyNode = new ListNode();
  dummyNode.next = head;
  while (dummyNode.next !== null) {
    if (dummyNode.next.val === value) {
      dummyNode.next = dummyNode.next.next;
    } else {
      dummyNode = dummyNode.next;
    }
  }
};

// Remove all nodes with a specific value Using recurtion

const removeElementsByValue2 = (
  head: ListNode | null,
  value: number
): ListNode | null => {
  if (head === null) {
    return null;
  }

  head.next = removeElementsByValue2(head.next, value);
  return head.val === value ? head.next : head;
};

// Remove Nth Node From End of List

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummyNode = new ListNode();
  dummyNode.next = head;
  let slow = dummyNode;
  let fast = dummyNode.next;
  while (n > 0 && fast !== null) {
    fast = fast.next;
    n--;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next!;
  }
  slow.next = slow.next!.next;

  return dummyNode.next;
}
