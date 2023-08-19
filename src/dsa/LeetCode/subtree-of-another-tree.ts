const isValidSubtree = (
  root: TreeNode | null,
  subRoot: TreeNode | null
): boolean => {
  if (root === null && subRoot === null) {
    return true;
  } else if (root === null || subRoot === null) {
    return false;
  } else if (root.val !== subRoot.val) {
    return false;
  }
  return (
    isValidSubtree(root.left, subRoot.left) &&
    isValidSubtree(root.right, subRoot.right)
  );
};

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  if (subRoot === null) {
    return true;
  }
  if (root.val === subRoot.val) {
    isValidSubtree(root, subRoot);
  }
  return (
    isValidSubtree(root.left, subRoot) || isValidSubtree(root.right, subRoot)
  );
}
