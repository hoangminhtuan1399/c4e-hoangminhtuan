let myFamily = {
    quantity: 4,
    member: ["Dad", "Mom", "Me", "Daughter"],
    location: "Vietnam",
};
let family = {};
Object.setPrototypeOf(family, myFamily);
