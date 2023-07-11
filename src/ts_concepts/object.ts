let employee: {
  readonly id: number;
  name: string;
  calculate: (salary: number) => void;
} = {
  id: 2,
  name: "Somnath Kar",
  calculate: (salary: number) => {
    const result = salary * 2;
    return result;
  },
};

// Define a custom type 'Employee' using the 'type' keyword

type Employee = {
  readonly id: number;
  name: string;
  calculate: (salary: number) => void;
};

// Create an object 'newEmployee' of type 'Employee'

let newEmployee: Employee = {
  id: 126,
  name: "Somnath",
  calculate: (salary: number): number => {
    const result = salary * 2;
    return result;
  },
};

/* This code defines two interfaces, `People` and `College`. `People` interface has two properties,
`name` and `age`. An object `me` is created with type `People` and assigned values for `name` and
`age`. */

interface People {
  name: string;
  age: number;
}

const me: People = {
  name: "Somnath Kar",
  age: 22,
};

interface College extends People {
  collegename: string;
  major: string;
  startYear: number;
}

const myId: College = {
  name: "Somnath",
  age: 22,
  collegename: "ABC College",
  major: "Computer Science",
  startYear: 2023,
};
