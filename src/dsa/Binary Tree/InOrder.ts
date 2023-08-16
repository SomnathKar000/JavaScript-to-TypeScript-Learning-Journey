str = "";
const inOrder = (node: TreeNode | null) => {
  if (node === null) {
    return;
  }
  inOrder(node.left);
  str += node.val;
  inOrder(node.right);
  return str;
};

console.log(preOrder(root));
