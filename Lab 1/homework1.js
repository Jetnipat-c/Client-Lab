var prompt = require("prompt-sync")();
const goal = Math.floor(Math.random() * 10) + 1;
console.log(goal);
round = 0;
while (true) {
  var luckynumber = Number(prompt("What is your lucky number? "));
  if (luckynumber === goal) {
    console.log("Congratulations, you won.");
    console.log(`You paly ${round} round.`);
    break;
  } else {
    console.log("Try again...");
    round++;
    true;
  }
}
