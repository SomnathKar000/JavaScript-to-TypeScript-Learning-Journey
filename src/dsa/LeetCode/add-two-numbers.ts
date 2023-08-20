//  Definition for singly-linked list.

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let num1: number[] = getValues(l1);
  let num2: number[] = getValues(l2);
  let result: number[] = [];

  let i = 0;
  let carry = 0;

  while (i < num1.length || i < num2.length || carry > 0) {
    const digit1 = num1[i] || 0;
    const digit2 = num2[i] || 0;

    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result.push(sum % 10);

    i++;
  }

  let dummyHead = new ListNode();
  let temp = dummyHead;

  for (const digit of result) {
    temp.next = new ListNode(digit);
    temp = temp.next;
  }

  return dummyHead.next;
}

const getValues = (list: ListNode | null): number[] => {
  let num: number[] = [];
  let head = list;

  while (head !== null) {
    num.push(head.val);
    head = head.next;
  }

  return num;
};
