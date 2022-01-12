let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let obj_key = Object.keys(obj);
for (let i  = 0; i < obj_key.length; i++) {
  obj_key[i] = obj_key[i].toUpperCase();
}
console.log(obj_key);