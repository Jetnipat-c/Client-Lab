// check whether 'now' is before 'spec'

const now = new Date();
const spec = new Date("2020-11-20");

console.log(now.valueOf());
console.log(now.valueOf() > spec.valueOf());
