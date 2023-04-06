// 大北京疫情，家中蔬菜总量类目
const vegetablesNum = {
  tomatoes: 12,
  radishs: 10,
  cabbages: 1,
};

type NewVegetables = {
  [K in keyof typeof vegetablesNum]: {
    [K2 in K]: typeof vegetablesNum[K2];
  };
}[keyof typeof vegetablesNum];

const cookie2: NewVegetables = {
  tomatoes: 123,
  cabbages: 123,
};

type A1 = keyof typeof vegetablesNum;

type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"

export const locales = [
  {
    locale: "se",
    language: "Swedish",
  },
  {
    locale: "en",
    language: "English",
  },
] as const;

type Locale = typeof locales[number]["language"];


let b: Object;
b = "1"; // Success
b = {}; // Success


