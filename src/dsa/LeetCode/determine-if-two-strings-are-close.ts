function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;
  let map1 = new Map<string, number>();
  let map2 = new Map<string, number>();
  for (const str of word1) map1.set(str, (map1.get(str) || 0) + 1);
  for (const str of word2) map2.set(str, (map2.get(str) || 0) + 1);
  let freq1 = [...map1.values()].sort((a, b) => a - b).join("");
  let freq2 = [...map2.values()].sort((a, b) => a - b).join("");
  let chars1 = [...map1.keys()].sort().join("");
  let chars2 = [...map2.keys()].sort().join("");
  return freq1 === freq2 && chars1 === chars2;
}
