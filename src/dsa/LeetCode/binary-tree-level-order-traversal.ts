function levelOrder2(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  let nums: number[][] = [];
  let num: number[] = [];
  let queue: (TreeNode | null)[] = [];
  queue.push(root);
  queue.push(null);
  while (queue.length !== 0) {
    let currentNode: TreeNode | null | undefined = queue.shift();
    if (currentNode === undefined) {
      break;
    } else if (currentNode === null) {
      nums.push(num);
      num = [];
      if (queue.length > 0) {
        queue.push(null);
      }
    } else {
      num.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  return nums;
}
