str = "";

const postOrder = (node: TreeNode | null) => {
  if (node === null) {
    return;
  }
  postOrder(node.left);
  postOrder(node.right);
  str += node.val;
  return str;
};

console.log(postOrder(root));
