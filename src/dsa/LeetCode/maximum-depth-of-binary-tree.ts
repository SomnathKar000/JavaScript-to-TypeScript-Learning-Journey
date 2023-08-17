function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  let leftHeight = maxDepth(root.left);
  let rightHeight = maxDepth(root.right);
  let height = Math.max(leftHeight, rightHeight) + 1;
  return height;
}
