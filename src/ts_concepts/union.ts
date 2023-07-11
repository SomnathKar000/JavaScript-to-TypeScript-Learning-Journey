const kgToLbs = (weight: number | string): number => {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
};

console.log(kgToLbs(28));
console.log(kgToLbs("32kg"));
