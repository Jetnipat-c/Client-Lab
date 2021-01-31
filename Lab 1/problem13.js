// create function convert baht to usd
var prompt = require("prompt-sync")();
var money = prompt("Your money THB: ");

convert = (money) => {
  return (money * 0.033).toFixed(2);
};
console.log(convert(money));
