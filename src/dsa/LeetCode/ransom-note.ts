/*Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.*/

function canConstruct(ransomNote: string, magazine: string): boolean {
  for (let i = 0; i < ransomNote.length; i++) {
    let letter = ransomNote[i];
    if (magazine.indexOf(letter) == -1) return false;
    magazine = magazine.replace(letter, "");
  }
  return true;
}
