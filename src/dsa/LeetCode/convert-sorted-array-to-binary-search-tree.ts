function sortedArrayToBST(nums: number[]): TreeNode | null {
  function helper(l: number, r: number): TreeNode | null {
    if (l > r) return null;
    let mid = Math.trunc((l + r) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = helper(l, mid - 1);
    root.right = helper(mid + 1, r);
    return root;
  }
  return helper(0, nums.length - 1);
}
