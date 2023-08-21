class MyHashMap {
  map: { [key: number]: number };
  constructor() {
    this.map = {};
  }

  put(key: number, value: number): void {
    this.map[key] = value;
  }

  get(key: number): number {
    return this.map[key] === undefined ? -1 : this.map[key];
  }

  remove(key: number): void {
    delete this.map[key];
  }
}
