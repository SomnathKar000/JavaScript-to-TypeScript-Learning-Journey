function maxDepth(root: TreeNode | null): number {
  let max = 0;
  const findDepth = (node: TreeNode | null, depth: number) => {
    if (node === null) {
      return;
    }
    max = Math.max(depth, max);
    findDepth(node.left, depth + 1);
    findDepth(node.right, depth + 1);
  };
  findDepth(root, 1);
  return max;
}
