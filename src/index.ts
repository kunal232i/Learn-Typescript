// built in type

let age = 12;
let Name = "xyz";
let published = true;
let arr = [2, 3, 4];

// any type
let anyArr = [];
let any;

// Tuples -> key pair
let tuple: [number, string] = [1, "Hello"];

// Enum
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

//functions
const calTax = (income: number, taxYear: number): number => {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
};
console.log(calTax(2, 2022));

//objects
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "xyz",
  retire: (date: Date) => {
    console.log(date);
  },
};
