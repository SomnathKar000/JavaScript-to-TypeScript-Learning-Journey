type Customer = {
  birthDay?: Date;
};

const getCustomer = (id: number): Customer | null | undefined => {
  return id === 0 ? null : { birthDay: new Date() };
};

let customer = getCustomer(1);
// Optional property access operator

console.log(customer?.birthDay?.getFullYear());

// Optional element access operator
// let suppose we have an array of customers and we want to print the fist customer on the console
// now if the array is going to be null or undefined of course we have to check

// this is where we can use optional element access operator

//      customer?.[0]
