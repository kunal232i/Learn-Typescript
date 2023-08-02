"use strict";
var _a;
let employee = {
    id: 1,
    name: "xyz",
    retire: (date) => {
        console.log(date);
    },
};
const kgToLbs = (weight) => {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
};
console.log(kgToLbs(10));
console.log(kgToLbs("20kg"));
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
let metric = "cm";
const greeting = (msg) => {
    if (msg)
        console.log(msg);
    else
        console.log("hello!");
};
greeting("Hola!");
greeting(null);
greeting(undefined);
const getCustomer = (id) => {
    return id === 0 ? null : { birthday: new Date() };
};
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
//# sourceMappingURL=index.js.map