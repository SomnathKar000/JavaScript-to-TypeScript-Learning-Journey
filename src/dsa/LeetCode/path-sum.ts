function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }
  let result = false;
  const addPath = (node: TreeNode | null, currentSum: number) => {
    if (node === null) {
      return;
    }
    currentSum += node.val;
    if (node.left === null && node.right === null && currentSum === targetSum) {
      result = true;
    }
    addPath(node.left, currentSum);
    addPath(node.right, currentSum);
  };
  addPath(root, 0);
  return result;
}
