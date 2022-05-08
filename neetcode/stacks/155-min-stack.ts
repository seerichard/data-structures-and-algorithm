// https://leetcode.com/problems/min-stack/

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const lastItem = (arr: number[]): number => {
  // Could also use the new array.at(-1)
  return arr[arr.length - 1];
};

class MinStack {
  // *** Must declare this for TypeScript ***
  stack: number[];
  min: number[];

  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(val: number): void {
    // Only add to min stack if val is the new min
    if (!this.min.length || val <= lastItem(this.min)) {
      this.min.push(val);
    }

    this.stack.push(val);
  }

  pop(): void {
    // Only pop min if the current stack top is the local min
    if (lastItem(this.stack) === lastItem(this.min)) {
      this.min.pop();
    }

    this.stack.pop();
  }

  top(): number {
    if (!this.stack) return null;

    return lastItem(this.stack);
  }

  getMin(): number {
    return lastItem(this.min);
  }
}
