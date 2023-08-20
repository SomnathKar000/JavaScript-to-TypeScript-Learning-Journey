// Delete first
const deleteFirst = (): void => {
  if (head === null) {
    return;
  }
  head = head.next;
};

// Delete last
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

// Remove all elements with a specific value

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

// Using recurtion

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
