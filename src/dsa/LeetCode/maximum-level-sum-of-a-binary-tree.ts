function maxLevelSum(root: TreeNode | null): number {
  if (root === null || (root.left === null && root.right === null)) return 1;

  let level = 1;
  let maxVal = [-Infinity, 1];
  let queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    let n = queue.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      count += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (count > maxVal[0]) {
      maxVal[0] = count;
      maxVal[1] = level;
    }
    level++;
  }

  return maxVal[1];
}
