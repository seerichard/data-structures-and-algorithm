// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Time Complexity:  O(n)
// Space Complexity: O(h) - h being the height of the tree
function maxDepth(root: TreeNode | null): number {
  if (!root) return null;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
