type PlatformId = Array<
  | "APP"
  | "H5"
  | "wechatProgram"
  | "baiduProgram"
  | "toutiaoProgram"
  | "kuaishouProgram"
>;
const ids: PlatformId = ["APP"];
type Property = "key1" | "key2";
type Person = Record<Property, string>;
const p: Person = {
  key1: "hello 啊",
  key2: "树哥",
};

interface A {
  name: string;
  age: number;
}
interface B {
  name: string;
  id: string;
}

type Union = A | B;
const c: Union = {
  name: "terrymin1",
  id: "rr",
  age: 22,
};
const b: Union = {
  name: "terrymin",
  age: 45,
};

type Intersetion = A & B;
const d: Intersetion = {
  id: "yuie",
  age: 32,
  name: "terrymin",
};


type VersionKeys =
	| 'androidVersion'
	| 'iosVersion'
	| 'ipadVersion'
	| 'vrVersion';



  const res = { name: "Lucy", age: 18 };
  type StuType = typeof res;
  function fn(obj: StuType) {
    // 这里写obj. 有 name 和 age 的提示了
    console.log(obj.name);
  }
  fn(res);