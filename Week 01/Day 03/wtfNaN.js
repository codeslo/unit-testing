// just an example of how weird NaN is

let test = NaN;

console.log(test === NaN); // false

console.log(isNaN(test)); // true