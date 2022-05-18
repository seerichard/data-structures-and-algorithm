// https://leetcode.com/problems/invert-binary-tree/

// Time Complexity:  O(n)
// Space Complexity: O(h) - h being the height of the tree
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  // Save the left node before swapping
  const left = root.left;
  root.left = root.right;
  root.right = left;

  // Recursively call on both nodes
  invertTree(root.left);
  invertTree(root.right);

  return root;
}
