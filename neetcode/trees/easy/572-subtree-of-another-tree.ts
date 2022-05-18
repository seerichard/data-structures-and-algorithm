// https://leetcode.com/problems/subtree-of-another-tree/

// Time Complexity: O(n*s) - Root multiplied by subtree
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  // Edge case - if subRoot is null, then it is a subtree of root. Technically a leaf node has null children
  if (!subRoot) return true;

  // If root is null then subRoot cannot be a child
  if (!root) return false;

  // Check if current position of root is sameTree as subRoot
  if (sameTree(root, subRoot)) return true;

  // Recursively call on the left and right nodes of the root, check if either are true
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

  // Sub function to check if trees are equal
  function sameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root && !subRoot) return true;

    if (!root || !subRoot || root.val !== subRoot.val) return false;

    return (
      sameTree(root.left, subRoot.left) && sameTree(root.right, subRoot.right)
    );
  }
}
