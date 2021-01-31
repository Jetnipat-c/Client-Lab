// use .reduce to find the minimum value in an array

const arr = [-1, -6, 10, 20, -3, 4];

const minimum = arr.reduce((min, item) => {
  if (item > min) {
    return min;
  } else {
    return item;
  }
});
console.log(minimum);
