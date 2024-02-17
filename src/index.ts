const arr: Array<string | number> = [344, "Junaid"];

const arr2: string[] = ["Sami", "Zohaib", "Junaid"];

const arr3: number[] = [33, 42, 543, 32];

console.log(arr, arr2, arr3);

arr2.forEach((i) => {
  console.log(i);
});
arr.forEach((e) => {
  console.log(e.toString());
});
arr3.forEach((v) => {
  console.log(v.toString());
});
