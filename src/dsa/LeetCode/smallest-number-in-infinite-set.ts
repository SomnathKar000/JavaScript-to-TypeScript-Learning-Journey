class SmallestInfiniteSet {
  arr: boolean[] = [];
  constructor() {
    this.arr = new Array(1001).fill(true);
  }

  popSmallest(): number {
    for (let i = 1; i < this.arr.length; i++) {
      if (this.arr[i]) {
        this.arr[i] = false;
        return i;
      }
    }
    return -1;
  }

  addBack(num: number): void {
    this.arr[num] = true;
  }
}
