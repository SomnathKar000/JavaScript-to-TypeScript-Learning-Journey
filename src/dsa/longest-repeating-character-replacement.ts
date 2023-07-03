let s3: string = "AABABBA";
let k: number = 1;

function characterReplacement(s: string, k: number): number {
  let max: number = 0;
  let start: number = 0;
  let count: number = 0;

  for (let i: number = 0; i < s.length; i++) {
    if (s[i] == s[start]) {
      count++;
    }
    if (count > k) {
      start = i;
      count = 0;
    }
    max = Math.max(max, i - start + 1);
  }

  return max;
}

console.log(characterReplacement(s3, k));
