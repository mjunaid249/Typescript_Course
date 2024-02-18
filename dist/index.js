"use strict";
// interface Obj {
//   height: number;
//   weight: number;
//   gender?: boolean; //Optional
// }
const func = (n, m, l) => {
    if (typeof l === "undefined") {
        return "Value was not Provided";
    }
    return n * m * l;
};
console.log(func(32, 43));
