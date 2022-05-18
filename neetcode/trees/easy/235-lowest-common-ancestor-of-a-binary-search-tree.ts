// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// Time Complexity:  O(logn)
// Space Complexity: O(1)
function lowestCommonAncestorIterative(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else {
      return root;
    }
  }
}

// Time Complexity:  O(n)
// Space Complexity: O(n)
function lowestCommonAncestorRecursive(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestorRecursive(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestorRecursive(root.right, p, q);
  } else {
    return root;
  }
}
