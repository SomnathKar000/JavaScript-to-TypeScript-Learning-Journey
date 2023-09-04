class StockSpanner {
  stack: [number, number][] = [];
  constructor() {}

  next(price: number): number {
    let span: number = 1;

    while (
      this.stack.length > 0 &&
      price >= this.stack[this.stack.length - 1][0]
    ) {
      span += this.stack.pop()![1];
    }
    this.stack.push([price, span]);
    return span;
  }
}
