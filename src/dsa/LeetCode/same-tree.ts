function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const traverse = (node: TreeNode | null): string => {
    if (node === null) {
      return "#";
    }
    return node.val + traverse(node.left) + traverse(node.right);
  };

  return traverse(p) === traverse(q);
}
