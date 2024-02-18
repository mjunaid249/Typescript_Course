"use strict";
//
// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
//   readonly id: string;
// }
// type getDataType = (product: Product) => void;
// const getdata: getDataType = (product) => {
//   console.log(product);
// };
// const ProductOne: Product = {
//   name: "MacBook",
//   stock: 78,
//   price: 4400202,
//   photo: "samplephotourl",
//   id: "11",
// };
// getdata(ProductOne);
// const errorHandler = (): never => {
//   throw new Error();
// };
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//.......Type Assertion..............
// const btn = document.getElementById("btn") as HTMLElement;
// const btn = document.getElementById("btn")!;
// const btn = <HTMLElement>document.getElementById("btn");
// btn.addEventListener("click", () => {
//   alert("Clicked!");
// });
// const img = document.getElementById("img") as HTMLImageElement;
// img.src;
const form = document.getElementById("myform");
const myinp = document.querySelector("form input");
form.onsubmit = (e) => {
    e.preventDefault();
    console.log(myinp.value);
    console.log(typeof myinp.value);
};
