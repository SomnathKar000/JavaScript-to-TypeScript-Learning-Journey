// Time complexcity O(n^2)

const getHeight = (node: TreeNode | null): number => {
  if (node === null) {
    return 0;
  }
  let left = getHeight(node.left);
  let right = getHeight(node.right);
  return Math.max(left, right) + 1;
};

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  if (isBalanced(root.left) === false && isBalanced(root.right) === false) {
    return false;
  }
  let lh = getHeight(root.left);
  let rh = getHeight(root.right);
  if (Math.abs(lh - rh) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
}

// Time complexcity O(n)

const checkHeight = (root: TreeNode | null): number => {
  if (root === null) {
    return 0;
  }
  let leftH = checkHeight(root.left);
  if (leftH === -1) {
    return -1;
  }
  let rightH = checkHeight(root.right);
  if (rightH === -1 || Math.abs(rightH - leftH) > 1) {
    return -1;
  }
  return Math.max(leftH, rightH) + 1;
};

function isBalanced2(root: TreeNode | null): boolean {
  return checkHeight(root) !== -1;
}
