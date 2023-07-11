// Union types

let numberOrString: string | number;

numberOrString = "number";
numberOrString = 12345;

// Union Array

let numberOrArray: (number | string)[];

numberOrArray = [1, "string", 4, 5, "string"];

// Object

let person: {
  name: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

person = {
  name: "User",
  age: 22,
  isAdmin: false,
};

person.phone = "123456789";

// Functions

let sum = (num1: number, num2: number, num3?: number) => {
  console.log(num3);
  return num1 + num2;
};
sum(2, 5);

// Type Aliases

type Person1 = {
  name: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

let USER: Person1 = {
  name: "User",
  age: 22,
  isAdmin: false,
  phone: "123456789",
};

type myFun = (a: number, b: string) => void;

let write: myFun = (age, name) => {
  console.log(age, name);
};

// Enum

type Person2 = {
  name: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
  theme: "dark" | "light";
};
let userWithTheme: Person2 = {
  name: "User",
  age: 22,
  isAdmin: false,
  phone: "123456789",
  theme: "dark",
};

// Interfaces

interface IUser {
  name: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp1: IEmployee = {
  name: "Employee 1",
  age: 22,
  isAdmin: false,
  phone: "123456789",
  employeeId: 1,
};

const client1: IUser = {
  name: "Client 1",
  age: 20,
  isAdmin: false,
  phone: "123456788",
};

// Generics

interface IPosts<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const post1: IPosts<string | number> = {
  id: 1,
  title: "Post 1",
  desc: "Description",
  extra: ["a", "b", 2, "d", 6],
};

interface IPostEvenBetter<T extends Object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const post2: IPostEvenBetter<Person1> = {
  id: 1,
  title: "Post 1",
  desc: "Description",
  extra: [{ name: "User", age: 22, isAdmin: false }],
};
