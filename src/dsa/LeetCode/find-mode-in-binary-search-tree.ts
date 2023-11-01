function findMode(root: TreeNode | null): number[] {
  let currCount = 0;
  let maxCount = 0;
  let currVal: number | null = null;
  let arr: number[] = [];
  function inOrde(node: TreeNode | null) {
    if (node === null) return;
    inOrde(node.left);
    currCount = node.val === currVal ? currCount + 1 : 1;
    if (currCount === maxCount) arr.push(node.val);
    else if (currCount > maxCount) {
      maxCount = currCount;
      arr = [node.val];
    }
    currVal = node.val;
    inOrde(node.right);
  }
  inOrde(root);
  return arr;
}
