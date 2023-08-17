const sumOfNodes = (node: TreeNode | null): number => {
  if (node === null) {
    return 0;
  }
  return sumOfNodes(node.left) + sumOfNodes(node.right) + node.val;
};
