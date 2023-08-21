function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }
  [root.right, root.left] = [root.left, root.right];
  invertTree(root.right);
  invertTree(root.left);
  return root;
}
