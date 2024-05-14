/*
 * @Author: TerryMin
 * @Date: 2023-09-25 20:22:44
 * @LastEditors: TerryMin
 * @LastEditTime: 2024-05-12 15:33:26
 * @Description: file not
 */
const months = ["Jan", "Mar", "Apr", "May"];

// 在索引 1 处添加一个元素
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); 
console.log(months); 