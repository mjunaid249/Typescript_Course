"use strict";
//
// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
//   readonly id: string;
// }
const users = [
    {
        name: "Junaid",
        age: 20,
    },
    {
        name: "Zohaib",
        age: 10,
    },
    {
        name: "Zain",
        age: 13,
    },
    {
        name: "Random",
        age: 33,
    },
];
const filterByPeoples = (arr, property, value) => {
    return arr.filter((i) => {
        i[property] === value;
    });
};
const filteredPeople = filterByPeoples(users, "name", "Junaid");
console.log(filteredPeople);
