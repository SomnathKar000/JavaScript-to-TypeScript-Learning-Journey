function compress(chars: string[]): number {
  let str: string[] = [];
  let charCount = 1;

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      charCount++;
    } else {
      str.push(chars[i]);
      if (charCount > 1) {
        str.push(...charCount.toString().split(""));
      }
      charCount = 1;
    }
  }

  // Clear the original array
  chars.length = 0;

  // Copy the compressed characters back to the original array
  for (const k of str) {
    chars.push(k);
  }

  return chars.length;
}
