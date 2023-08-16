class MinStack {
  mainStack: number[];
  minStack: number[];
  constructor() {
    this.mainStack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.mainStack.push(val);
    if (this.minStack.length == 0 || this.getMin() >= val) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    const num = this.mainStack.pop();
    if (num === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top(): number {
    const value = this.mainStack[this.mainStack.length - 1];
    return value;
  }

  getMin(): number {
    let min = this.minStack[this.minStack.length - 1];
    return min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
