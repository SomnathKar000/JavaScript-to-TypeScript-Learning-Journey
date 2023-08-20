class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
let head: ListNode | null;

const createLinkedList = (nums: number[]): ListNode | null => {
  if (nums.length === 0) {
    return null;
  }
  let head = new ListNode(nums[0]);
  head.next = createLinkedList(nums.slice(1));
  return head;
};

const viewLinkedList = (head: ListNode | null) => {
  while (head !== null) {
    console.log(head.val, "Linked list");
    head = head.next;
  }
};

let arr = [1, 5, 8, 4, 7, 3, 5, 4];

head = createLinkedList(arr);
viewLinkedList(head);
