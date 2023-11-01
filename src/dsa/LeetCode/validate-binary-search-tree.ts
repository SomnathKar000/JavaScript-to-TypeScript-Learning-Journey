function isValidBST(root: TreeNode | null): boolean {
  function validate(
    node: TreeNode | null,
    left: number,
    right: number
  ): boolean {
    if (node === null) return true;
    if (node.val <= left || node.val >= right) return false;
    const leftTree = validate(node.left, left, node.val);
    const rightTree = validate(node.right, node.val, right);
    return leftTree && rightTree;
  }
  return validate(root, -Infinity, Infinity);
}
