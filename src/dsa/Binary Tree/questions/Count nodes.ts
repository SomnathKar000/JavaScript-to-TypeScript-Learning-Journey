const countNodes1 = (node: TreeNode | null): number => {
  if (node === null) {
    return 0;
  }
  let count = 0;
  let helper = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }
    count++;
    helper(node.left);
    helper(node.right);
  };
  helper(node);
  return count;
};

const countNodes2 = (node: TreeNode | null): number => {
  if (node === null) {
    return 0;
  }
  let left = countNodes2(node.left);
  let right = countNodes2(node.right);
  return left + right + 1;
};

const countNodes3 = (node: TreeNode | null): number => {
  if (node === null) {
    return 0;
  }
  return countNodes3(node.left) + countNodes3(node.right) + 1;
};
