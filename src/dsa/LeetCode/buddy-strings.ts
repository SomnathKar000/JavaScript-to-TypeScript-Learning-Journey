function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;

  let differentChar: number[] = [];

  for (let i = 0; i < s.length; i++)
    if (s[i] !== goal[i]) differentChar.push(i);

  if (differentChar.length === 0) {
    let set = new Set(s);

    if (set.size < s.length) return true;
  } else if (differentChar.length === 2) {
    const [i, j] = differentChar;
    return s[i] === goal[j] && s[j] === goal[i];
  }

  return false;
}
