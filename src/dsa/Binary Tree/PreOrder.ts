let str = "";

const preOrder = (node: TreeNode | null) => {
  if (node === null) {
    return;
  }
  str += node.val;
  preOrder(node.left);
  preOrder(node.right);
  return str;
};

console.log(preOrder(root));
