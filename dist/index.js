"use strict";
let age = 12;
let Name = "xyz";
let published = true;
let arr = [2, 3, 4];
let anyArr = [];
let any;
let tuple = [1, "Hello"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
const calTax = (income, taxYear) => {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
};
console.log(calTax(2, 2022));
let employee = {
    id: 1,
    name: "xyz",
    retire: (date) => {
        console.log(date);
    },
};
//# sourceMappingURL=index.js.map