const isIdentical = (
  root: TreeNode | null,
  subRoot: TreeNode | null
): boolean => {
  if (root === null && subRoot === null) {
    return true;
  }
  if (root === null || subRoot === null) {
    return false;
  }
  if (root.val !== subRoot.val) {
    return false;
  }
  return (
    isIdentical(root.left, subRoot.left) &&
    isIdentical(root.right, subRoot.right)
  );
};

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null) {
    return false;
  }
  if (isIdentical(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
