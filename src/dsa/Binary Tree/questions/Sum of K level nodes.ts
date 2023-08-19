const sumOfKLevelNodes = (root: TreeNode | null, k: number): number => {
  if (root == null) {
    return -1;
  }
  let queue: (TreeNode | null)[] = [];
  queue.push(root);
  queue.push(null);
  let num = 0;

  let level = 1;
  while (queue.length !== 0) {
    let currentNode = queue.shift();
    if (currentNode === undefined) {
      break;
    } else if (currentNode === null) {
      if (queue.length > 0) {
        queue.push(null);
      }
      if (k === level) {
        return num;
      } else {
        num = 0;
      }
      level++;
    } else {
      num += currentNode.val;
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
  return num;
};
