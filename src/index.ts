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

// interface Person {
//   [key: string]: string;
//   name: string;
//   email: string;
// }

// let key = "name";

// const obj: Person = {
//   name: "Junaid",
//   email: "junaidch249249@gmail.com",
// };

// obj[key as keyof Person];

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

//.............................................................
//---------------Utility Types--------------
//.............................................................

//Partial

// type User2 = Required<User>;

//---------------------------------------------------
//--------------------Generics-----------------------
//---------------------------------------------------

// const func = <T>(n: T): T => {
//   console.log(typeof n);
//   return n;
// };

// func(3);

// type Person = {
//   name: string;
//   age: number;
// };

// const person1: Person = {
//   name: "Junaid",
//   age: 33,
// };

// const func = <T>(n: T): T => {
//   return n;
// };

// const ans = func<Person>(person1);

// interface Person {
//   name: string;
//   email: string;
// }
// interface Person2 {
//   name: string;
//   email: string;
//   password: string;
// }

// const user: Person = {
//   name: "Junaid",
//   email: "junaidch249249@gmail.com",
// };

// const user2: Person2 = {
//   name: "Zohaib",
//   email: "adad",
//   password: "33",
// };

// const func = <T, U>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };

// const ans = func<Person, Person>(user, user2);

type Person = {
  name: string;
  age: number;
};

const users: Person[] = [
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

const filterByPeoples = <T, U extends keyof T>(
  arr: T[],
  property: U,
  value: T[U]
): T[] => {
  return arr.filter((i) => {
    i[property] === value;
  });
};

const filteredPeople = filterByPeoples(users, "name", "Junaid");

console.log(filteredPeople);
