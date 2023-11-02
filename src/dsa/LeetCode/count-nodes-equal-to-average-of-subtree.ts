function averageOfSubtree(root: TreeNode | null): number {
  let count = 0;
  function postOrder(node: TreeNode | null): [number, number] {
    if (node === null) return [0, 0];
    const [leftSum, leftCount] = postOrder(node.left);
    const [rightSum, rightCount] = postOrder(node.right);
    const currSum = leftSum + rightSum + node.val;
    const currCount = leftCount + rightCount + 1;
    if (Math.trunc(currSum / currCount) === node.val) count++;
    return [currSum, currCount];
  }
  postOrder(root);
  return count;
}
