// https://leetcode.com/problems/balanced-binary-tree/

function isBalanced(root: TreeNode | null): boolean {
  // Set initial result to be a balanced tree
  let result = true;

  function dfs(root: TreeNode | null): number {
    if (!root) return null;

    const left = dfs(root.left);
    const right = dfs(root.right);

    // Check if the height difference between the local left and right node is greater than 1
    if (Math.abs(left - right) > 1) {
      result = false;
    }

    // Return the height of the tree
    return 1 + Math.max(left, right);
  }

  dfs(root);

  return result;
}
