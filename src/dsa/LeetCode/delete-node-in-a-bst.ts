function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) return null;
  if (root.val === key) {
    if (root.left === null) return root.right;
    else if (root.right === null) return root.left;
    else {
      let curr = root.left;
      while (curr.right) curr = curr.right;
      root.val = curr.val;
      root.left = deleteNode(root.left, curr.val);
    }
  }
  if (root.val > key) root.left = deleteNode(root.left, key);
  else root.right = deleteNode(root.right, key);

  return root;
}
