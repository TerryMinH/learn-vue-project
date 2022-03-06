/*
 * @Author: TerryMin
 * @Date: 2021-11-17 18:04:48
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-03-02 14:01:12
 * @Description: file not
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

var isBuiltInTag = makeMap('slot,component', true);
console.log(isBuiltInTag);
