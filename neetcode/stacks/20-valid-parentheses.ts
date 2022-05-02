// https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // Get the current value
    const value = s[i];

    if (map[value]) {
      // Add the inverse of the value
      // E.g. Add ")" if value is "("
      stack.push(map[value]);
    } else {
      // Get the stack head (LIFO)
      // Stack head is end of array
      const endValue = stack.pop();

      if (value !== endValue) return false;
    }
  }

  return stack.length === 0;
}
