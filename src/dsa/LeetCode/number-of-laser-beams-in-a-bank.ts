function numberOfBeams(bank: string[]): number {
  let beems = 0;
  let hold = 0;
  for (let i = 0; i < bank.length; i++) {
    let devices = 0;
    for (const s of bank[i]) devices += Number(s);
    if (devices === 0) continue;
    beems += devices * hold;
    hold = devices;
  }
  return beems;
}
