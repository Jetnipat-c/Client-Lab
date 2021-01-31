// Annonymust func
let foo = (s1, s2, callback) => {
  return callback(s1 + s2);
};
foo("foo", "bar", (result) => console.log(result));
