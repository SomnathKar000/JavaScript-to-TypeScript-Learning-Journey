class TimeMap {
  store: { [key: string]: [string, number][] };
  constructor() {
    this.store = {};
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.store[key]) {
      this.store[key] = [];
    }
    this.store[key].push([value, timestamp]);
  }

  get(key: string, timestamp: number): string {
    let str = "";
    const store = this.store[key] === undefined ? [] : this.store[key];
    let left = store.length - 1;
    let right = 0;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (store[mid][1] <= timestamp) {
        str = store[mid][0];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return str;
  }
}
