// Approch 1 time complexity: O(n^n)
const calculateDiameter1 = (node: TreeNode | null): number => {
  if (node === null) {
    return 0;
  }
  let leftDiameter = calculateDiameter1(node.left);
  let rightDiameter = calculateDiameter1(node.right);
  let currentDiameter = heightOfTree(node.left) + heightOfTree(node.right) + 1;
  return Math.max(leftDiameter, rightDiameter, currentDiameter);
};

// Approach 2 time complexity: O(n)

const calculateDiameter2 = (node: TreeNode | null): TreeInfo => {
  if (node === null) {
    return new TreeInfo(0, 0);
  }

  let left = calculateDiameter2(node.left);
  let right = calculateDiameter2(node.right);

  let diameter = left.height + right.height + 1;
  diameter = Math.max(diameter, Math.max(left.diameter, right.diameter));

  let height = Math.max(left.height, right.height) + 1;

  return new TreeInfo(diameter, height);
};
