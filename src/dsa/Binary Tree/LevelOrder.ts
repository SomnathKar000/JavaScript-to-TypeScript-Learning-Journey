let queue: (TreeNode | null)[] = [];
const levelOrder = (node: TreeNode | null) => {
  if (node == null) {
    return;
  }
  let str = "";
  queue.push(node);
  queue.push(null);
  while (queue.length !== 0) {
    let currentNode: TreeNode | null | undefined = queue.shift();
    if (currentNode === undefined) {
      break;
    } else if (currentNode === null) {
      console.log(str);
      console.log("\n");
      str = "";
      if (queue.length > 0) {
        queue.push(null);
      }
    } else {
      str += currentNode.val;
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        {
          queue.push(currentNode.right);
        }
      }
    }
  }
};

levelOrder(root);
