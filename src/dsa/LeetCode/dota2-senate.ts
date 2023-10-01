function predictPartyVictory(senate: string): string {
  let RQueue: number[] = [];
  let DQueue: number[] = [];
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") RQueue.push(i);
    else DQueue.push(i);
  }
  while (RQueue.length > 0 && DQueue.length > 0) {
    if (RQueue[0] > DQueue[0]) {
      let val = DQueue.shift()!;
      RQueue.shift();
      DQueue.push(val + senate.length);
    } else {
      let val = RQueue.shift()!;
      DQueue.shift();
      RQueue.push(val + senate.length);
    }
  }
  if (RQueue.length === 0) return "Dire";
  else return "Radiant";
}
