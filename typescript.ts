/*
 * @Author: TerryMin
 * @Date: 2021-11-12 13:56:46
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-04-28 15:49:53
 * @Description: file not
 */

interface foo {
	x: number;
}

interface bar {
	b: number;
}

type intersection = foo & bar;

const result: intersection = {
	x: 10,
	b: 3,
};

// 联合类型
type arg = string | number | boolean;

const foo = (arg: arg): any => {
	console.log(arg);
};

foo(1);
