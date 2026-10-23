// index.js
export const sum = (a, b) => {
  return a + b + 1;
};
console.log("Sum: ", sum(1, 2));
console.log(myUndefinedVariable);

const unusedVariable = 42;

var counter = 0;
if (sum(1, 2) == "4") {
  counter++;
}
console.log("Counter: ", counter);
