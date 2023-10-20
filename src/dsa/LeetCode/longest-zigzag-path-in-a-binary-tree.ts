function longestZigZag(root: TreeNode | null): number {
  let max = 0;
  const findMaxZ = (node: TreeNode | null, isLeft: boolean, level: number) => {
    if (node === null) return;
    max = Math.max(max, level);
    if (isLeft) {
      findMaxZ(node.right, false, level + 1);
      findMaxZ(node.left, true, 1);
    } else {
      findMaxZ(node.right, false, 1);
      findMaxZ(node.left, true, level + 1);
    }
  };
  findMaxZ(root, true, 0);
  findMaxZ(root, false, 0);
  return max;
}
