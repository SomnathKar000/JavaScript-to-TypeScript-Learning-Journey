// This function takes a number as input and returns a number.

const calculatetax = (income: number, taxYear: number = 2022): number => {
  if (taxYear < 2022) {
    return income * 1.3;
  }
  return income * 1.5;
};

console.log(calculatetax(45_000, 2022));
