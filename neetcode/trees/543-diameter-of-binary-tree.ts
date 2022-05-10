// https://leetcode.com/problems/diameter-of-binary-tree/

// Time Complexity:  O(n)
// Space Complexity: O(h) - h being the height of the tree
function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;

  function dfs(root: TreeNode | null): number {
    if (!root) return null;

    const left = dfs(root.left);
    const right = dfs(root.right);

    // Get the current local maximum - combined height of left + right
    result = Math.max(left + right, result);

    // Return the current height of the tree
    return 1 + Math.max(left, right);
  }

  dfs(root);

  return result;
}
