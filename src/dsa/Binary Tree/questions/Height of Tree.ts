const heightOfTree = (node: TreeNode | null): number => {
  if (node === null) {
    return 0;
  }
  let height = Math.max(heightOfTree(node.left), heightOfTree(node.right)) + 1;
  return height;
};
