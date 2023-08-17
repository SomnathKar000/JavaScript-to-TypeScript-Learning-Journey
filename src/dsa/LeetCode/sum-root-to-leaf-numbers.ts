function sumNumbers(root: TreeNode | null): number {
  let count = (node: TreeNode | null, num: number): number => {
    if (node === null) {
      return 0;
    }
    num = num * 10 + node.val;
    if (!node.left && !node.right) {
      return num;
    }
    let leftSum = count(node.left, num);
    let rightSum = count(node.right, num);
    return leftSum + rightSum;
  };

  return count(root, 0);
}
