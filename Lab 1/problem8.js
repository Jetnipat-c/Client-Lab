// use .sort to order number in an array asc

const arr = [1, 2, 3, 4, 6, 5];
// console.log(arr.sort());
// console.log(arr.reverse());

const sorted = arr.sort((a, b) => {
  return a - b;
});

console.log(sorted);

const reversed = arr.sort((a, b) => {
  return b - a;
});

console.log(reversed);
