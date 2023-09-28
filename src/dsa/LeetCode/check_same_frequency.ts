let list1 = [1, 2, 3, 2, 1];
let list2 = [3, 1, 2, 1, 3];

const check_same_frequency = (list1: number[], list2: number[]) => {
  let map = new Map<number, number>();
  for (const num of list1) map.set(num, (map.get(num) || 0) + 1);
  for (const num of list2) {
    let n = map.get(num);
    if (n === 1) map.delete(num);
    else map.set(num, (n || 0) - 1);
  }
  return map.size === 0;
};

check_same_frequency(list1, list2);
