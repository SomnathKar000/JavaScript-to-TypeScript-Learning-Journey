function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  let min = Infinity;
  const dfs = (node: TreeNode | null, h: number) => {
    if (node === null) return;
    if (node.left == null && node.right === null) min = Math.min(min, h);
    dfs(node.left, h + 1);
    dfs(node.right, h + 1);
  };
  dfs(root, 1);
  return min;
}
