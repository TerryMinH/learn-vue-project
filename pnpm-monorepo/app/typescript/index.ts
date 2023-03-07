interface IA {
  a: string;
  b: number;
}

type TB = {
  b: number;
  c: number[];
};

type TC = IA | TB; // TC类型的变量的键只需包含ab或bc即可，当然也可以abc都有
type TD = IA & TB; // TD类型的变量的键必需包含abc

