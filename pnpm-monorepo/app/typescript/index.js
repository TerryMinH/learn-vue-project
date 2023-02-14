"use strict";
/*
 * @Author: TerryMin
 * @Date: 2022-08-19 11:00:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2023-02-10 10:46:00
 * @Description: file not
 */
exports.__esModule = true;
var animalsInfo = {
    dog: {
        name: "dogName",
        age: 2
    },
    cat: {
        name: "catName",
        age: 3
    }
};
var type = 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */ || 2 /* ShapeFlags.FUNCTIONAL_COMPONENT */;
if (type & 6 /* ShapeFlags.COMPONENT */) {
    console.log(33);
}
