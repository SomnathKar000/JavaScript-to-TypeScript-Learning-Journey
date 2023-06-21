let num: number = 123_45_65;
let course: string = "Hello world";
let is_published: boolean = false;

let level; // It is an any veriable in TypeScript
level = 54;
level = "age";

const printValues = (value: any) => {
  console.log(value);
};

// Enums

const small = 1;
const medium = 12;
const large = 23;

// PascalCase

enum Size {
  Small = 0,
  Medium = 12,
  Large = 20,
}

let mySize: Size = Size.Medium;

console.log(mySize);
