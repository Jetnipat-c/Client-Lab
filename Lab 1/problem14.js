// create function convert baht to usd using api
const axios = require("axios").default;
var prompt = require("prompt-sync")();
const apiUrl = "https://api.exchangeratesapi.io/latest";

var money = Number(prompt("Your money usd: "));

const foo = async (money) => {
  const sult = await axios.get(apiUrl);
  //sult.data.rates.THB * money;
  console.log(money);
  console.log(sult.data.rates.THB);

  return console.log((sult.data.rates.THB / (money * 1)).toFixed(2));
};
foo(money);
