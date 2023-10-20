function pathSum(root: TreeNode | null, targetSum: number): number {
  let count = 0;
  const countSum = (node: TreeNode | null, current: number) => {
    if (node === null) return;
    current += node.val;
    if (current === targetSum) count++;
    countSum(node.left, current);
    countSum(node.right, current);
  };
  const dfs = (node: TreeNode | null) => {
    if (node === null) return;
    countSum(node, 0);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return count;
}
