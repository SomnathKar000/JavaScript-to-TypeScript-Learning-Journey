class MyHashSet {
  set: { [key: number]: boolean };
  constructor() {
    this.set = {};
  }

  add(key: number): void {
    this.set[key] = true;
  }

  remove(key: number): void {
    delete this.set[key];
  }

  contains(key: number): boolean {
    return this.set[key] === true ? true : false;
  }
}
