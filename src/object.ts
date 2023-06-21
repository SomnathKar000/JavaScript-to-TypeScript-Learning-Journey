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
