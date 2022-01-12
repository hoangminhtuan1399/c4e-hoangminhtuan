let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
};

//Cách 1:
obj.bar[3].xyz = 606;

//Cách 2:
function changeValue(object) {
    object.xyz = 606;
}
changeValue(obj.bar[3]);
console.log(obj.bar);