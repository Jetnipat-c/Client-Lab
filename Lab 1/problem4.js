// use .map to create new number array

const strArr = ["1", "2", "3", "4", "5", "6", "7"];

// strArr.forEach((item, index) => {
//   console.log(item + ":" + index);
// });

const result = strArr.map((item, index) => {
  return Number(item);
});
console.log(result);
