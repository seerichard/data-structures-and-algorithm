// https://leetcode.com/problems/binary-tree-level-order-traversal/

// Time Complexity:  O(n)
// Space Complexity: O(n) - O(n/2) as at any one time the queue could have n/2 items. Round to O(n)
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const res = [];
  let queue = [root];

  while (!!queue.length) {
    // Create a temp array to add to res
    const level = [];

    // Create a shallow copy of the queue and clear it (to do a nice for of loop)
    const queueClone = queue;
    queue = [];

    for (const node of queueClone) {
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    res.push(level);
  }

  return res;
}

function levelOrderAlt(root: TreeNode | null): number[][] {
  if (!root) return [];

  const res = [];
  let queue = [root];

  while (!!queue.length) {
    // Create a temp array to add to res
    const level = [];
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      // Get first item in queue
      const node = queue.shift();

      // Add to current level
      level.push(node.val);

      // Add children to queue
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    // Add current level to result
    res.push(level);
  }

  return res;
}
