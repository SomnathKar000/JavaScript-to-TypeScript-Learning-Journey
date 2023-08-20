// Add first

const addFirst = (val: number) => {
  let node = new ListNode(val);
  if (head === null) {
    head = node;
  }
  node.next = head;
  head = node;
};

// add last

const addLast = (val: number) => {
  let node = new ListNode(val);
  if (head === null) {
    head = node;
  }
  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = node;
};
