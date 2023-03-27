const objTarget = {
  name: "terrymin",
  age: 20,
};
var obj = new Proxy(objTarget, {
  get: function (target, propKey, receiver) {
    console.log(11, target, propKey, receiver);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  },
  apply:()=>{
    console.log('I am apply');
  }
});
// obj.sex='boy';
// console.log(obj.name);

var target = function () { return 'I am the target'; };
var handler = {
  apply: function () {
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);

console.log(p());
