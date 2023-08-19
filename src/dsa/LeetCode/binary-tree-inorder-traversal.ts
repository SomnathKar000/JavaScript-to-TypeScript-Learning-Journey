function inorderTraversal(root: TreeNode | null): number[] {
  let nums: number[] = [];
  if (root === null) {
    return nums;
  }

  const helper = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }
    helper(node.left);
    nums.push(node.val);
    helper(node.right);
  };
  helper(root);
  return nums;
}
