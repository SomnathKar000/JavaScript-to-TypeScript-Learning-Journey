class HashMap<K, V> {
  private data: { [key: string]: V };
  constructor() {
    this.data = {};
  }
  set(key: K, value: V) {
    let stringKey = JSON.stringify(key);
    this.data[stringKey] = value;
  }
  get(key: K) {
    let stringKey = JSON.stringify(key);
    return this.data[stringKey];
  }
  delete(key: K) {
    let stringKey = JSON.stringify(key);
    delete this.data[stringKey];
  }
  has(key: K): boolean {
    let stringKey = JSON.stringify(key);
    return this.data.hasOwnProperty(stringKey);
  }
  isEmpty(): boolean {
    return Object.keys(this.data).length === 0;
  }
  size() {
    return Object.keys(this.data).length;
  }
  clear() {
    this.data = {};
  }
  getKeys() {
    return Array.from(Object.keys(this.data), (e) => JSON.parse(e));
  }
  getValues() {
    return this.getKeys().map((e) => this.data[e]);
  }
}

let map = new HashMap<number, string>();
map.set(5, "Hello");
map.set(8, "Ok");
map.set(2, "done");
console.log(map.getValues());
console.log(map.isEmpty());
console.log(map.getKeys());
console.log(map.has(5));
console.log(map.size());
map.delete(2);
map.delete(8);
map.delete(5);
console.log(map.getValues());
console.log(map.isEmpty());
console.log(map.getKeys());
console.log(map.has(5));
console.log(map.size());
