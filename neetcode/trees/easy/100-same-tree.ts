// https://leetcode.com/problems/same-tree/

// Time Complexity:  O(p + q)
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // If both values are null then return true
  if (!p && !q) return true;

  // If either of the values are null OR the values do not match return false
  if (!p || !q || p.val !== q.val) return false;

  // Recursively call for each node - must &&
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
