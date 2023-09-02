function totalFruit(fruits: number[]): number {
  let count = 0;
  let bucket = new Map<number, number>();
  let l = 0,
    r = 0;
  while (r < fruits.length) {
    let fR = fruits[r];
    bucket.set(fR, (bucket.get(fR) || 0) + 1);
    while (bucket.size > 2) {
      let fL = fruits[l];
      bucket.set(fL, bucket.get(fL)! - 1);
      if (bucket.get(fL)! === 0) bucket.delete(fL);
      l++;
    }
    count = Math.max(count, r - l + 1);
    r++;
  }
  return count;
}
