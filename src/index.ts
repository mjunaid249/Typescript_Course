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

// const form = document.getElementById("myform") as HTMLFormElement;

// const myinp = document.querySelector("form input") as HTMLInputElement;

// form.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();

//   const value: number = Number(myinp.value);
//   console.log(value);
//   console.log(typeof value);

//   const h2 = document.createElement("h2");
//   h2.textContent = String(value * 2);
//   const body = document.querySelector("body")!;

//   body.append(h2);
// };

interface Person {
  //   [key: string]: string;
  name: string;
  email: string;
}

let key = "name";

const obj: Person = {
  name: "Junaid",
  email: "junaidch249249@gmail.com",
};

obj[key as keyof Person];

// const getName = (): string => {
//   return obj.name;
// };

// const getEmail = (): string => {
//   return obj.email;
// };

// const getdata = (key: keyof Person) => {
//   return obj[key];
// };

// getdata("name");
