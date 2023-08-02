// type alies
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee: Employee = {
  id: 1,
  name: "xyz",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union types
const kgToLbs = (weight: number | string): number => {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
};

console.log(kgToLbs(10));
console.log(kgToLbs("20kg"));

// intersection types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// literal (exact, specific) types
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = "cm" | "inch";
let metric: Metric = "cm";

// Nullable types
const greeting = (msg: string | null | undefined) => {
  if (msg) console.log(msg);
  else console.log("hello!");
};
greeting("Hola!");
greeting(null);
greeting(undefined);

// optional chaining
type Customer = {
  birthday?: Date;
};

const getCustomer = (id: number | null): Customer | null | undefined => {
  return id === 0 ? null : { birthday: new Date() };
};
// optional property access operator -> "?"
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());

// opitional element access operator
// customer?.[0]

// optional call
let log: any = null;
log?.("a");
