// use .findIndex to check wheter the array contains even number

const arr = [1, 3, 5, 7, 8, 9, 21];

const result = arr.findIndex((item) => {
  return item % 2 === 0;
});
console.log(`IndexValue: ${result} Value: ${arr[result]}`);
