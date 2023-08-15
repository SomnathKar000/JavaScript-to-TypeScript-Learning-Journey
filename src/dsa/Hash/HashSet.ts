class HashSet {
  private data: { [keys: number]: boolean };
  constructor() {
    this.data = {};
  }
  add(value: number) {
    this.data[value] = true;
  }
  remove(value: number) {
    delete this.data[value];
  }
  contains(value: number): boolean {
    return this.data[value] === true;
  }
  size() {
    return Object.keys(this.data).length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  values() {
    return Object.keys(this.data).map(Number);
  }
}
let set = new HashSet();
set.add(5);
set.add(8);
set.add(2);
console.log(set.values());
console.log(set.contains(5));
console.log(set.size());
console.log(set.isEmpty());
set.remove(2);
set.remove(8);
set.remove(5);
console.log(set.values());
console.log(set.contains(5));
console.log(set.size());
console.log(set.isEmpty());
