class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const buildTree = (preorder: number[]) => {
  let index = 0;
  const helper = () => {
    if (index >= preorder.length || preorder[index] === -1) {
      index++;
      return null;
    }
    let val = preorder[index++];
    let node: TreeNode = new TreeNode(val);
    node.left = helper();
    node.right = helper();
    return node;
  };
  return helper();
};

let index = -1;

const newBuildTree = (preorder: number[]) => {
  index++;
  if (preorder[index] === -1) {
    return null;
  }
  let val = preorder[index];
  let node = new TreeNode(val);
  node.left = newBuildTree(preorder);
  node.right = newBuildTree(preorder);
  return node;
};

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

const preorderData = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
const root1 = buildTree(preorderData);
const root2 = newBuildTree(preorderData);
console.log(root1);
console.log(root2);
console.log(preOrder(root1));
