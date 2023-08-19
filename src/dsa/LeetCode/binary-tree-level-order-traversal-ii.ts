function levelOrderBottom(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  let nums: number[][] = [];
  let queue: TreeNode[] = [root];
  while (queue.length !== 0) {
    let levelLength = queue.length;
    let values: number[] = [];
    for (let i = 0; i < levelLength; i++) {
      let currentNode = queue.shift();
      if (currentNode === undefined) {
        break;
      }
      values.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    nums.unshift(values);
  }
  return nums;
}
