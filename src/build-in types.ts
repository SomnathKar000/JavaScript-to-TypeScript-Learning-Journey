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

const enum Size {
  Small = 0,
  Medium = 12,
  Large = 20,
}

let mySize: Size = Size.Medium;

console.log(mySize);

// Literal types

type Quantity = 500 | 1000;

let quantity: Quantity = 500;

type Metric = "cm" | "inch";

// Nullable types

const greet = (name: string | null | undefined) => {
  if (name) {
    console.log("hello" + name);
  } else {
    console.log("Hola!");
  }
};

greet("somnath");
greet(null);
greet(undefined);
