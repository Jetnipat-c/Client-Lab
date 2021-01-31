var prompt = require("prompt-sync")();
var name = prompt("First name : ");
var score = prompt("Score : ");

if (score >= 80 && score <= 100) console.log(`${name} Score: ${score} Grad: A`);
else if (score >= 75 && score <= 79)
  console.log(`${name} Score: ${score} Grad: B+`);
else if (score >= 70 && score <= 74)
  console.log(`${name} Score: ${score} Grad: B`);
else if (score >= 65 && score <= 69)
  console.log(`${name} Score: ${score} Grad: C+`);
else if (score >= 60 && score <= 64)
  console.log(`${name} Score: ${score} Grad: C`);
else if (score >= 55 && score <= 59)
  console.log(`${name} Score: ${score} Grad: D+`);
else if (score >= 50 && score <= 54)
  console.log(`${name} Score: ${score} Grad: D`);
else console.log(`${name} Score: ${score} Grad: E`);
