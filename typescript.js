"use strict";
/*
 * @Author: TerryMin
 * @Date: 2021-11-12 13:56:46
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-03 11:11:39
 * @Description: file not
 */
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(info) {
        this.info = info;
    }
    Student.prototype.getInfo = function (key) {
        return this.info[key];
    };
    return Student;
}());
exports.Student = Student;
var student = new Student({
    name: 'uuuu',
    age: 20,
    gender: 'male'
});
var test = student.getInfo('name');
console.log(test);
