function maxPathSum(root: TreeNode | null): number {
  if (root === null) return 0;
  let max = root.val;
  const findMax = (root: TreeNode | null, val: number): number => {
    if (root == null) return 0;
    const left = findMax(root.left, val);
    const right = findMax(root.right, val);
    const leftMax = Math.max(left, 0);
    const rightMax = Math.max(right, 0);
    max = Math.max(max, leftMax + rightMax + root.val);
    return Math.max(leftMax, rightMax) + root.val;
  };
  findMax(root, 0);
  return max;
}
