var prompt = require("prompt-sync")();
var arr = [];
var total = 0;
for (let i = 0; i < 3; i++) {
  var number = Number(prompt("Enter number : "));
  arr.push(number);
}
const sum = arr.reduce((prev, item, index) => {
  console.log("prev", prev);
  console.log("item", item);
  return prev + item;

  //total += item;
});
console.log("sort =", arr.sort());
console.log("sum = ", sum);
console.log(arr);
