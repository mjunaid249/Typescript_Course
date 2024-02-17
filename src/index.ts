interface Obj {
  height: number;
  weight: number;
  gender?: boolean; //Optional
}

interface newObj extends Obj {
  Class: string;
}

const MyObj: newObj = {
  height: 32,
  weight: 311,
  gender: true,
  Class: "Biochemistry",
};

const obj: Obj = {
  height: 33,
  weight: 44,
  gender: false,
};

const obj2: Obj = {
  height: 321,
  weight: 21,
};
