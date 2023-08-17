class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class TreeInfo {
  diameter: number;
  height: number;
  constructor(diameter: number, height: number) {
    this.diameter = diameter;
    this.height = height;
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

let preorderData = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
let root = buildTree(preorderData);
console.log(root);
let root2 = newBuildTree(preorderData);
let root1 = buildTree(preorderData);
